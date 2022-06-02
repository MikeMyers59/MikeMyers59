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
            xhr.open('GET', '/homepages/comp_sys_sup/include/html/contact/' + person + '.html');
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
                    contacts = [{'name' : 'tomlewon', 'knowledge' : 'Green'}];
                }

                for (var i = 0; i < contacts.length; i++) {
                    document.getElementById(contacts[i].name).classList.add('contactActive' + contacts[i].knowledge);
                    document.getElementById(contacts[i].name).classList.remove('contactInactive');
                }
            }

            // set people by case with name and knowledge set.  Green = Primary, Yellow = Secondary
            switch (topic) {
                case 'assetManagement':
                    highlightContacts([
                            {'name' : 'caracormier', 'knowledge' : 'Green'},
                            {'name' : 'tomlewon', 'knowledge' : 'Green'},
                            {'name' : 'jeffparker', 'knowledge' : 'Yellow'}
                        ]);
                    break;
                case 'smartPhone':
                    highlightContacts([
                            {'name' : 'harisobed', 'knowledge' : 'Green'},
                            {'name' : 'matthewkaczynski', 'knowledge' : 'Green'},
                            {'name' : 'ryandixe', 'knowledge' : 'Green'},
                            {'name' : 'caracormier', 'knowledge' : 'Green'},
                            {'name' : 'nathanmccarron', 'knowledge' : 'Yellow'}
                        ]);
                    break;
                case 'businessLab':
                    highlightContacts([
                            {'name' : 'matthewkaczynski', 'knowledge' : 'Green'},
							{'name' : 'harisobed', 'knowledge' : 'Green'},
							{'name' : 'nathanmccarron', 'knowledge' : 'Yellow'},
							{'name' : 'tomlewon', 'knowledge' : 'Yellow'}
                        ]);
                    break;
                case 'ccn':
                    highlightContacts([
                            {'name' : 'lynnepickett', 'knowledge' : 'Green'},
							{'name' : 'bronwyngallagher', 'knowledge' : 'Green'},
                            {'name' : 'bryanyoung', 'knowledge' : 'Yellow'}
                        ]);
                    break;
				case 'cloudassessments':
                    highlightContacts([
                            {'name' : 'lynnepickett', 'knowledge' : 'Green'},
							{'name' : 'bronwyngallagher', 'knowledge' : 'Green'},
                            {'name' : 'bryanyoung', 'knowledge' : 'Yellow'}
                        ]);
                    break;
                case 'mobility':
                    highlightContacts([
                            {'name' : 'nathanmccarron', 'knowledge' : 'Green'},
                            {'name' : 'caracormier', 'knowledge' : 'Green'},
                            {'name' : 'tomlewon', 'knowledge' : 'Yellow'}
                        ]);
                    break;
				case 'networkStorage':
                    highlightContacts([
                            {'name' : 'jeffparker', 'knowledge' : 'Green'},
                            {'name' : 'ryandixe', 'knowledge' : 'Yellow'}
                        ]);
                    break;
				case 'ngen':
                    highlightContacts([
                            {'name' : 'katledesma', 'knowledge' : 'Green'},
                            {'name' : 'nathanmccarron', 'knowledge' : 'Green'}
                        ]);
                    break;
                case 'pcRefresh':
                    highlightContacts([
                            {'name' : 'colesilvia', 'knowledge' : 'Green'},
                            {'name' : 'jeffparker', 'knowledge' : 'Yellow'},
                            {'name' : 'tomlewon', 'knowledge' : 'Yellow'}
                        ]);
                    break;
                case 'pkiCertificates':
                    highlightContacts([
                            {'name' : 'angelamock', 'knowledge' : 'Green'},
                            {'name' : 'ernievetelino', 'knowledge' : 'Green'},
                            {'name' : 'caracormier', 'knowledge' : 'Green'},
                        ]);
                    break;
                case 'printers':
                    highlightContacts([
                            {'name' : 'ryandixe', 'knowledge' : 'Green'}
                        ]);
                    break;
                case 'riskAssessments':
                    highlightContacts([
                            {'name' : 'harisobed', 'knowledge' : 'Green'},
                            {'name' : 'ryandixe', 'knowledge' : 'Yellow'},
                            {'name' : 'brettpetrow', 'knowledge' : 'Yellow'},
                            {'name' : 'matthewkaczynski', 'knowledge' : 'Yellow'},
                            {'name' : 'colesilvia', 'knowledge' : 'Yellow'}
                        ]);
                    break;
                case 'securityExceptions':
                    highlightContacts([
							{'name' : 'andreadiorio', 'knowledge' : 'Green'},
							{'name' : 'andrewbentley', 'knowledge' : 'Green'},
							{'name' : 'bronwyngallagher', 'knowledge' : 'Green'},
							{'name' : 'francoispelletier', 'knowledge' : 'Green'},
							{'name' : 'luismadrid', 'knowledge' : 'Green'},
							{'name' : 'katledesma', 'knowledge' : 'Yellow'},
							{'name' : 'lynnepickett', 'knowledge' : 'Green'},
                            {'name' : 'bryanyoung', 'knowledge' : 'Yellow'}
                        ]);
                    break;
                case 'serviceRequests':
                    highlightContacts([
                            {'name' : 'angelamock', 'knowledge' : 'Green'},
                            {'name' : 'caracormier', 'knowledge' : 'Green'},
                            {'name' : 'ryandixe', 'knowledge' : 'Green'},
                            {'name' : 'harisobed', 'knowledge' : 'Green'},
                            {'name' : 'nathanmccarron', 'knowledge' : 'Green'},
                            {'name' : 'matthewkaczynski', 'knowledge' : 'Green'},
							{'name' : 'bensmith', 'knowledge' : 'Green'},
                            {'name' : 'brettpetrow', 'knowledge' : 'Green'},
                            {'name' : 'colesilvia', 'knowledge' : 'Green'},
							{'name' : 'katledesma', 'knowledge' : 'Green'},
                            {'name' : 'bobspencer', 'knowledge' : 'Green'},
                            {'name' : 'jeffparker', 'knowledge' : 'Green'}
                        ]);
                    break;
                case 'sp97':
                    highlightContacts([
                            {'name' : 'andreadiorio', 'knowledge' : 'Yellow'},
                            {'name' : 'ernievetelino', 'knowledge' : 'Yellow'},
                            {'name' : 'francoispelletier', 'knowledge' : 'Green'},
                            {'name' : 'angelamock', 'knowledge' : 'Green'},
                            {'name' : 'lynnepickett', 'knowledge' : 'Green'},
                            {'name' : 'bryanyoung', 'knowledge' : 'Yellow'}
                        ]);
                    break;
				case 'techstop':
                    highlightContacts([
                            {'name' : 'nathanmccarron', 'knowledge' : 'Green'},
							{'name' : 'caracormier', 'knowledge' : 'Green'},
                            {'name' : 'harisobed', 'knowledge' : 'Green'},
                            {'name' : 'matthewkaczynski', 'knowledge' : 'Green'},
							{'name' : 'jeffparker', 'knowledge' : 'Green'},
							{'name' : 'bensmith', 'knowledge' : 'Green'},
                            {'name' : 'brettpetrow', 'knowledge' : 'Green'},
                            {'name' : 'colesilvia', 'knowledge' : 'Green'},
                            {'name' : 'katledesma', 'knowledge' : 'Green'},
                            {'name' : 'ryancarlo', 'knowledge' : 'Green'},
							{'name' : 'michaelkeegan', 'knowledge' : 'Green'},
                            {'name' : 'bobspencer', 'knowledge' : 'Green'}
                        ]);
                    break;
                case 'vpn':  //also vdi
                    highlightContacts([
                            {'name' : 'nathanmccarron', 'knowledge' : 'Green'},
                            {'name' : 'tomlewon', 'knowledge' : 'Yellow'},
							{'name' : 'caracormier', 'knowledge' : 'Yellow'},
                            {'name' : 'ryandixe', 'knowledge' : 'Yellow'},
                            {'name' : 'harisobed', 'knowledge' : 'Yellow'},
                            {'name' : 'matthewkaczynski', 'knowledge' : 'Yellow'},
							{'name' : 'bensmith', 'knowledge' : 'Yellow'},
                            {'name' : 'brettpetrow', 'knowledge' : 'Yellow'},
                            {'name' : 'colesilvia', 'knowledge' : 'Yellow'},
							{'name' : 'katledesma', 'knowledge' : 'Yellow'},
                            {'name' : 'bobspencer', 'knowledge' : 'Yellow'}
                        ]);
                    break;
                case 'webMaster':
                    highlightContacts([
                            {'name' : 'espenlauter', 'knowledge' : 'Green'},
                            {'name' : 'bensmith', 'knowledge' : 'Green'},
							{'name' : 'harisobed', 'knowledge' : 'Green'},
                            {'name' : 'caracormier', 'knowledge' : 'Green'}
                        ]);
                    break;
                case 'wiki':
                    highlightContacts([
                            {'name' : 'bensmith', 'knowledge' : 'Yellow'},
                            {'name' : 'caracormier', 'knowledge' : 'Green'},
                            {'name' : 'espenlauter', 'knowledge' : 'Green'},
							{'name' : 'ryandixe', 'knowledge' : 'Yellow'}
                        ]);
                    break;
				case 'wifi':
                    highlightContacts([
                            {'name' : 'ryandixe', 'knowledge' : 'Green'},
							{'name' : 'bobspencer', 'knowledge' : 'Yellow'},
                            {'name' : 'tomlewon', 'knowledge' : 'Yellow'}
                        ]);
                    break;
                default:
                    highlightContacts();
            }
        }
});