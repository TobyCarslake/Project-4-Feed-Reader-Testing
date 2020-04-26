/* feedreader.js
 * test commit
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
       
        
        it('URL is defined and not empty', function() {
            for(entry of allFeeds) {
            expect(entry.url).not.toBe("");
            console.log(entry.url);
            expect(entry.url).toBeDefined();
            }
            

        });

        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('have a name', function() {
            for(entry of allFeeds) {
            expect(entry.name).not.toBe("");
            console.log(entry.name);
            expect(entry.name).toBeDefined();
            }
            

        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe("The menu", function() {
        
   

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it("is hidden by default", function () {
            expect(document.getElementsByTagName("body")[0].getAttribute("class")).toEqual('menu-hidden');
            

        });
        
         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        // triggers a click on menu icon, checks class of body if it equals blank it passes. Then clicks again and checks class of body, if it equals 'menu-hidden' it passes.
        it("visibility is toggled when clicked", function () {
              $('.menu-icon-link').trigger('click');
              expect(document.getElementsByTagName("body")[0].getAttribute("class")).toEqual('');
              $('.menu-icon-link').trigger('click');
              expect(document.getElementsByTagName("body")[0].getAttribute("class")).toEqual('menu-hidden');
                 
        });


    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function () {
        beforeEach(function(done) {
            setTimeout(function() {
              value = 0;
              done();
            }, 1000);
        });  
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        it('load feed is called, completes its work and contains at least one .entry element with the .feed container', function(done){
            expect(document.getElementsByClassName('feed')[0].childElementCount).not.toEqual(0);
            done();
        })

    })
    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function () {
        let feedArticlesStart;
        let feedArticlesAfterClick;
        beforeEach(function(done) {
            loadFeed(0);
            //feedArticlesStart = document.querySelector('h2').innerText;
            done();
            loadFeed(1);
            feedArticlesAfterClick = document.querySelector('h2').innerText;
           
            console.log(feedArticlesStart,feedArticlesAfterClick);
            
            done();
        });
        // afterEach(function(done) {
        //     loadFeed(1);
        //     feedArticlesAfterClick = document.querySelector('h2').innerText;
           
        //     //console.log(feedArticlesStart,feedArticlesAfterClick);
            
        //     done();
        //     });

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        
        it('checks that content changes when new feed is loaded', function(done) {

            
            loadFeed(0);
            feedArticlesStart = document.querySelector('h2').innerText;      
            //console.log(feedArticlesStart);    
            //feedArticlesAfterClick = document.querySelector('.feed');
            //console.log(feedArticlesAfterClick);
            expect(feedArticlesStart != feedArticlesAfterClick).toBe(true);
            done();
        })
    })

    
}());
