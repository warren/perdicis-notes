# How protocol buffers work
#publish 
Opened [[2022-06-24]]. From [[Musings on tech]].

Protobufs, invented at Google in 2008, is basically a more compact version of JSON or XML. It's a more efficient way of transferring information over the wire in binary form.

They are very fast data structures! They're just difficult for humans to read.

### How efficient?
Very efficient! When communicating in languages where JSON is not natively supported (e.g. Java), things run 70-80% faster on Protobuf than JSON.

When communicating in languages where JSON **is** natively supported (e.g. JavaScript), things run ~5% faster. So protobufs are typically not worth implementing for services that communicate over JS (e.g. Nodejs interface <--> Nodejs interface).

In both cases, protobufs consume 10-35% less space -- mostly dependent on whether the code environment is running compressed or not.


### JSON vs Protobuf
Here's some example JSON data:
```
{
  first_name: Warren
  last_name: Partridge
}
```

Imagine you must transmit this whole codeblock over the wire. That's not so bad.

But it can be improved. Here's the same data in protobuf schema form:

```
{
  string first_name = 1;
  string last_name = 2;
}
```

And now, the message to be transmitted: `126Warren229Partridge`

Bam, way more efficient. And if you're curious, the numbers indicate:

1: The field identifier,
2: The data type (string)
6: The length of the string ("Warren")

Harder for humans to read, but great for computers.

### Sources
- https://betterprogramming.pub/understanding-protocol-buffers-43c5bced0d47 - most content draws from this article. I found it exceptionally helpful.
- https://auth0.com/blog/beating-json-performance-with-protobuf