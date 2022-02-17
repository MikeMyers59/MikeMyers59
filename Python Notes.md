# Python Notes

- GUI automation (pyautogui) [Automating the boring stuff Chapter 18](https://automatetheboringstuff.com/chapter18/)

## Brython - Browser Python  
Brython (Browser Python) is an implementation of Python 3 running in the browser, with an interface to the DOM elements and events.
- https://github.com/brython-dev/brython
- http://www.brython.info/

```html
<!-- Load Brython JS -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/brython@3/brython.min.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/brython@3/brython_stdlib.js"></script>

<!-- Run Brython on load -->
<script>
    AJS.toInit(function() {
        brython();
    });
</script>

<!-- Create Python interpreter -->
<script type="text/python">
from interpreter import Interpreter
from browser import document

def OpenInt(event):
	Interpreter()

document["InterpreterButton"].bind("click", OpenInt)
</script>
<br />
<button id="InterpreterButton">Open a Python interpreter</button>

<h2>Python example (see source code)</h2>
<script type="text/python">
from browser import document, alert

def echo(event):
	alert(document["zone"].value)

document["mybutton"].bind("click", echo)
</script>
<br />
<input id="zone" /><button id="mybutton">Alert me!</button>
```

## PDB - Python Debugger
[PDB](https://docs.python.org/3/library/pdb.html) is the Python debugger.

Insert `import pdb; pdb.set_trace()` where you want to drop into PDB, basically a hybrid of a debugger (like GDB) and a Python shell.

## Examples

###sorts.py
```python
import random

def test_sorted(fn, iters=1000):
    for i in range(iters):
        l = [random.randint(0, 100) for i in range(0, random.randint(0, 50))]
        assert fn(l) == sorted(l)
        # print(fn.__name__, fn(l))

def insertionsort(array):

    for i in range(len(array)):
        j = i-1
        v = array[i]
        while j >= 0 and v < array[j]:
            array[j+1] = array[j]
            j -= 1
        array[j+1] = v
    return array

def quicksort(array):
    if len(array) <= 1:
        return array
    pivot = array[0]
    left = [i for i in array[1:] if i < pivot]
    right = [i for i in array[1:] if i >= pivot]
    return quicksort(left) + [pivot] + quicksort(right)

def quicksort_inplace(array, low=0, high=None):
    if len(array) <= 1:
        return array
    if high is None:
        high = len(array)-1
    if low >= high:
        return array

    pivot = array[high]
    j = low-1
    for i in range(low, high):
        if array[i] <= pivot:
            j += 1
            array[i], array[j] = array[j], array[i]
    array[high], array[j+1] = array[j+1], array[high]
    quicksort_inplace(array, low, j)
    quicksort_inplace(array, j+2, high)
    return array

if __name__ == '__main__':
    for fn in [quicksort, quicksort_inplace, insertionsort]:
        test_sorted(fn)
```

### logger.py
```python
import logging
import sys

class CustomFormatter(logging.Formatter):
    """Logging Formatter to add colors and count warning / errors"""

    grey = "\x1b[38;21m"
    yellow = "\x1b[33;21m"
    red = "\x1b[31;21m"
    bold_red = "\x1b[31;1m"
    reset = "\x1b[0m"
    format = "%(asctime)s - %(name)s - %(levelname)s - %(message)s (%(filename)s:%(lineno)d)"

    FORMATS = {
        logging.DEBUG: grey + format + reset,
        logging.INFO: grey + format + reset,
        logging.WARNING: yellow + format + reset,
        logging.ERROR: red + format + reset,
        logging.CRITICAL: bold_red + format + reset
    }

    def format(self, record):
        log_fmt = self.FORMATS.get(record.levelno)
        formatter = logging.Formatter(log_fmt)
        return formatter.format(record)

# create logger with 'spam_application'
logger = logging.getLogger("Sample")

# create console handler with a higher log level
ch = logging.StreamHandler()
ch.setLevel(logging.DEBUG)

if len(sys.argv)> 1:
    if sys.argv[1] == 'log':
        ch.setFormatter(logging.Formatter('%(asctime)s : %(levelname)s : %(name)s : %(message)s'))
    elif sys.argv[1] == 'color':
        ch.setFormatter(CustomFormatter())

if len(sys.argv) > 2:
    logger.setLevel(logging.__getattribute__(sys.argv[2]))
else:
    logger.setLevel(logging.DEBUG)

logger.addHandler(ch)

# logger.debug("debug message")
# logger.info("info message")
# logger.warning("warning message")
# logger.error("error message")
# logger.critical("critical message")

import random
import time
for _ in range(100):
    i = random.randint(0, 10)
    if i <= 4:
        logger.info("Value is {} - Everything is fine".format(i))
    elif i <= 6:
        logger.warning("Value is {} - System is getting hot".format(i))
    elif i <= 8:
        logger.error("Value is {} - Dangerous region".format(i))
    else:
        logger.critical("Maximum value reached")
    time.sleep(0.3)
```

