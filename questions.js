// Q1: What is HTTP?
// HTTP stands for Hypertext Transfer Protocol, which is a protocol used for setting the rules of communication.
// Q2: What is URL?
// URL stands for Universal Resource Locator, which is made up of several components needed to trigger a request/response cycle: protocol, hostname, port, resource and query.
// Q3: What is DNS?
// DNS stands for Domain Name System, which is used in tandem with a hostname to convert it into an IP address which the computer can use to access a web page.
// Q4: What is a query string?
// A query string is the final component of a URL. The query string is used to hold arguments and will load a page that requires some arguments to display a unique page. 
// Q5: What are two HTTP verbs and how are they different?
// Verbs are also known as methods. The two most common methods for HTTP are "GET" and "POST". The former simply retrieves a page, with no expectation of changing the data, whereas the latter changes a page and is typically executed through some action on a web page (not by entering a url).
// Q6: What is an HTTP request?
// An HTTP request is a request made to access a resource on the server. The HTTP request often includes a header needed to get additional information on the resource.
// Q7: What is an HTTP response?
// An HTTP response is what the server returns to a computer to allow it to access a resource on the server. Usually, the response will be sent in the form of a code (200 if successful, 404 if page not found).
// Q8: What is an HTTP header? Give a few examples of request and response headers you have seen.
// A header is a field passed through an HTTP request/response cycle that provies additional context needed to access a resource. Headers can include the language of the page the user would like to access (e.g. en for English, de for German) or if cookies will be used while accessing the site.
// Q9: What are the processes that happen when you type "http://somesite.com/some/page.html" into a browser?
// The process is complicated, but it can be broken down into a few steps. First, the DNS converts the hostname into an IP address the user can use to access the page. Next, the browser makes a "GET" request to the page along with headers to access additional resources.
// Next, the server provides a response (oftentimes a code like 200 if successful, or 404 if page isn't found). Then, the browser creates a DOM using the HTML received from the page. Finally, several similar requests are sent out to retrieve additional resources like CSS, JavaScript or more.