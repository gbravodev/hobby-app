var state = ( function () {

        const API_KEY = '6d3f11756524776e197143814615b';
        const MEETUP_BASE_URL = 'https://api.meetup.com/2/open_events.json?';

        var privateCounter = 0;
        var privateZip = '';

        var mbtiObj = {
            "E": 0,
            "I": 0,
            "S": 0,
            "N": 0,
            "F": 0,
            "T": 0,
            "P": 0,
            "J": 0
        };

        //mbtiObj functions
        function privateMbtiIncFunc( type ) {
            mbtiObj[type]++;
        }
        function publicMbtiIncrement( type ) {
            privateMbtiIncFunc( type );
        }
        function publicGetMbtiObj(){
          return mbtiObj;
        }
 
        //  counter functions
        function privateCountFunction() {
            privateCounter++;
        }
        function publicCountFunction() {
            publicIncrementCount();
        }
        function publicIncrementCount() {
            privateCountFunction();
        }
        function publicGetCount(){
          return privateCounter;
        }

        // zip functions 
        function privateSetZip( zip ) {
            privateZip = zip;
        }
        function publicZipFunction() {
            isValidZip() ? handleValidZip() : render.feedbackModal("Zip is Invalid", "Please re-enter the zip code in the correct format.", "Re-enter Zip" );
        }
        function isValidZip() {
            var sZip = $('#user-zip').val();
            var testRegex = /^\d{5}(-\d{4})?$/.test(sZip);
            return testRegex;
        }
        function handleValidZip( ) {
            privateSetZip($('#user-zip').val());
            $('.homepage').empty();
            state.startCount();
            render.quizView( state.count() );
        }
        function publicGetZip(){
          return privateZip;
        }

        // getters for the Constants
        function publicGetKey(){
          return API_KEY;
        }
        function publicBaseUrl(){
          return MEETUP_BASE_URL;
        }

        // Reveal public pointers to
        // private functions and properties
 
       return {
            // mbti obj 
            incrementMbti: publicMbtiIncrement,
            mbtiObj: publicGetMbtiObj,
            // counter 
            startCount: publicCountFunction,
            incrementCount: publicIncrementCount,
            count: publicGetCount,
            // zip
            initializeZip: publicZipFunction,
            zip: publicGetZip, 
            // getters for constants
            key: publicGetKey,
            url: publicBaseUrl
        };
 
 })();
 


