var http=require('http');
var url=require('url');
http.createServer(onRequest).listen(8080);
console.log("server started");
function onRequest(req,res)
{
    var a=url.parse(req.url,true);
    var q=a.query; 
    var n1=q.na;
    var n2=q.una;
    var n3=q.mnum;
    var n4=q.email;
    var n5=q.address;
    var n6=q.gender;
    var n7=q.city;
    res.write("<html> <body><table border='7'>");
    res.write("<tr><td>Name:</td> <td>"+n1+"</td></tr>");
    res.write("<tr><td>User name:</td> <td>"+n2+"</td></tr>");
    res.write("<tr><td>Mobile number:</td> <td>"+n3+"</td></tr>");
    res.write("<tr><td>Email:</td> <td>"+n4+"</td></tr>");
    res.write("<tr><td>Address:</td> <td>"+n5+"</td></tr>");
    res.write("<tr><td>Gender:</td> <td>"+n6+"</td></tr>");
    res.write("<tr><td>City:</td> <td>"+n7+"</td></tr>");
    res.write("</table> </body> </html>");
    res.end();
}


