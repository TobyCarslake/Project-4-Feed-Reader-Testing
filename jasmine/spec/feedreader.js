$(function() {
    describe('RSS Feeds', function() {
        /*  tests if allFeeds variable has been defined and that it is not empty.  */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This test loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty. */
        it('URL is defined and not empty', function() {
            for(entry of allFeeds) {
            expect(entry.url).not.toBe("");
            expect(entry.url).toBeDefined();
            }
        });

        /* This test loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty. */
        it('have a name', function() {
            for(entry of allFeeds) {
            expect(entry.name).not.toBe("");
            expect(entry.name).toBeDefined();
            }        
        });
    });

    /* checks if the menu has the hidden class on page load  */
    describe("The menu", function() {
        it("is hidden by default", function () {
            expect(document.getElementsByTagName("body")[0].getAttribute("class")).toEqual('menu-hidden');
        });

        // triggers a click on menu icon, checks class of body if it equals blank it passes. Then clicks again and checks class of body, if it equals 'menu-hidden' it passes.
        it("visibility is toggled when clicked", function () {
              $('.menu-icon-link').trigger('click');
              expect(document.getElementsByTagName("body")[0].getAttribute("class")).toEqual('');
              $('.menu-icon-link').trigger('click');
              expect(document.getElementsByTagName("body")[0].getAttribute("class")).toEqual('menu-hidden');        
        });
    });

    /* async to wait for feeds to load before counting the child elements" */
    describe('Initial Entries', function () {
        beforeEach(function(done) {
            setTimeout(function() {
              value = 0;
              done();
            }, 1000);
        });
        
        /* counts child elements of feed to check that the page has at least one element  */
        it('load feed is called, completes its work and contains at least one .entry element within the .feed container', function(done){
            expect(document.getElementsByClassName('entry')[0].childElementCount).not.toEqual(0);
            console.log(document.getElementsByClassName('entry')[0].childElementCount)
            done();
        })
    })

    /*  async to load feed 1 and declare the first article heading text as variable
        then load feed 2 and capture the first article heading text as a variable  */
    describe('New Feed Selection', function () {
        let feedArticlesStart = 0;
        let feedArticlesAfterClick = 0;
        beforeEach(function(done) {
            loadFeed(0, function() {
                feedArticlesStart = document.querySelectorAll('h2')[0].innerText;
                done();
                    loadFeed(1, function() {
                    feedArticlesAfterClick = document.querySelectorAll('h2')[0].innerText;
                    done();
                }); 
            }); 
        });

        /* compares the article heading text from feed 1 and 2 and checks if they are different */
        it('checks that content changes when new feed is loaded', function() {
            expect(feedArticlesStart).not.toEqual(feedArticlesAfterClick);
            console.log(feedArticlesStart,feedArticlesAfterClick);
        })
    }) 
}());
