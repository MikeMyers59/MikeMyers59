document.addEventListener("DOMContentLoaded", function(event) {
      // Select all person and topic elements as variables
      var persons = document.getElementsByClassName('contactPerson');
      var topics = document.getElementsByClassName('contactTopic');
      
        //  Sets all POCs and Topics to Inactive
        function clearAll() {
            
            for (var i = 0; i < persons.length; i++) {
                persons[i].classList.remove('contactActiveGreen');
                persons[i].classList.remove('contactActiveYellow');
                persons[i].classList.add('contactInactive');
            }
            
            for (var i = 0; i < topics.length; i++) {
                topics[i].classList.remove('contactActive');
                topics[i].classList.add('contactInactive');
            }
        }

        // Resets all to initial classes that existed on page load
        function resetAll() {
        
            for (var i = 0; i < persons.length; i++) {
                persons[i].classList.remove('contactActiveGreen');
                persons[i].classList.remove('contactActiveYellow');
                persons[i].classList.remove('contactInactive');
                persons[i].classList.remove('contactActive');
            }
            
            for (var i = 0; i < topics.length; i++) {
                topics[i].classList.remove('contactActive');
                topics[i].classList.remove('contactInactive');
            } 
        
            if (document.getElementById('contactDetailPane')) {
                document.getElementById('contactDetailPane').innerHTML = '';
            } else {
                document.getElementById('contactDetails').innerHTML = '';
            }
        }

        document.getElementById('resetContacts').addEventListener('click', function(event){
            event.stopPropagation();
            event.preventDefault();
            resetAll();
        });
              
        // Sets selected contact to active, resets all others and topics to page load
        for (var i = 0; i < persons.length; i++) {
            persons[i].addEventListener('click', loadDetails);
        }
        
        function loadDetails(event){
            event.stopPropagation();
            event.preventDefault();
            var person = this.id;
            
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = displayDetails;
            xhr.open('GET', '/homepages/departments/401/New_D401website/contact/' + person + '.html');
            xhr.send();
            
            function displayDetails() {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resetAll();
                        document.getElementById(person).classList.remove('contactInactive');
                        document.getElementById(person).classList.add('contactActive');
                        
                        if (document.getElementById('contactDetailPane')) {
                            document.getElementById('contactDetailPane').innerHTML = this.responseText;
                        } else {
                            document.getElementById('contactDetails').innerHTML = this.responseText;
                        }
                    }
                }
            }
        }     

        // highlights appropriate POC(s) based on topic
        for (var i = 0; i < topics.length; i++) {
            topics[i].addEventListener('click', selectTopic);
        }
        
        function selectTopic(event) {
            event.stopPropagation();
            event.preventDefault();
            var topic = this.id;
            
            clearAll();
            document.getElementById(topic).classList.add('contactActive');
            document.getElementById(topic).classList.remove('contactInactive');
            
            // Highlight contacts listed for a topic
            function highlightContacts(contacts) {
                
                // if we don't have contacts set, highlight tom
                if (typeof contacts === 'undefined') {
                    contacts = [{'name' : 'berry', 'knowledge' : 'Green'}];
                }
                
                for (var i = 0; i < contacts.length; i++) {
                    document.getElementById(contacts[i].name).classList.add('contactActive' + contacts[i].knowledge);
                    document.getElementById(contacts[i].name).classList.remove('contactInactive');
                }
            }
            
            // set people by case with name and knowledge set.  Green = Primary, Yellow = Secondary
            switch (topic) {
				case 'sustainment':
                    highlightContacts([
                            {'name' : 'roser', 'knowledge' : 'Green'},
                        ]);
                    break;
                case 'orgeneral':
                    highlightContacts([
                            {'name' : 'norton', 'knowledge' : 'Green'},
							{'name' : 'saunders', 'knowledge' : 'Yellow'}
                        ]);
                    break;
                case 'vpmgeneral':
                    highlightContacts([
                            {'name' : 'boehling', 'knowledge' : 'Green'}
                        ]);
                    break;
                case 'cmcssp':
                    highlightContacts([
                            {'name' : 'mankus', 'knowledge' : 'Green'},
                            {'name' : 'norton', 'knowledge' : 'Green'}
                        ]);
                    break;
                case 'fluids':
                    highlightContacts([
                            {'name' : 'boehling', 'knowledge' : 'Green'}
                        ]);
                    break;
                case 'npes':
                    highlightContacts([
                            {'name' : 'saunders', 'knowledge' : 'Green'}
                        ]);
                    break;
                case 'materials':
                    highlightContacts([
                            {'name' : 'draper', 'knowledge' : 'Green'},
                        ]);
                    break;
                case 'safety':
                    highlightContacts([
                            {'name' : 'norton', 'knowledge' : 'Green'}
                        ]);
                    break;
                case 'structures':
                    highlightContacts([
                            {'name' : 'norton', 'knowledge' : 'Green'},
							{'name' : 'kimball', 'knowledge' : 'Green'},
                            {'name' : 'laughton', 'knowledge' : 'Yellow'}
                        ]);
                    break;
                case 'systems':
                    highlightContacts([
                            {'name' : 'laughton', 'knowledge' : 'Green'},
                            {'name' : 'boehling', 'knowledge' : 'Yellow'}
                        ]);
                    break;
                default:
                    highlightContacts();
            }
        }
});