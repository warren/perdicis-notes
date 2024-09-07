# Life of a DNS request
#publish 
From [[Musings on tech]].

![[FB_IMG_1648402895569.jpg]]

What happens when you query https://www.google.com:
1. DNS resolver (run by your ISP, mobile carrier, WiFi network, or third party) gets your request.
2. The DNS resolver checks its cache (on itself or on the OS of your device) to map www.google.com to an IP. If cache miss, continue...
3. DNS resolver forwards its request to [1 of 13 root server clusters](http://www.iana.org/domains/root/servers) owned by organizations who report to the IANA, the Internet Assigned Numbers Authority.
4. The root server knows the locations of all TLD servers who can map URLs to NS records based on TLD. So it tells the resolver the IP of a ".com" gTLD server who may know the mapping.
5. DNS resolver asks the gTLD server for help.
6. gTLD server answers with an NS record for ns1.google.com
7. DNS resolver repeats this whole process (maybe in a slightly more efficient way, I have to imagine?) to query the Google nameserver.
8. Google nameserver can totally map www.google.com to an IP address. It returns an A or AAAA record (depending on IPv4 or IPv6).
9. DNS resolver triumphantly tells the OS it has an IP to reach out to.
10. The OS begins a TCP handshake with the IP.

The difference between gTLD and other TLD servers like ccTLDs (Country Code TLDs) is that Generic TLD servers do not service any particular country nor location (e.g. it services ".com" and ".gov" but not ".de").

From [Stack Exchange](https://serverfault.com/questions/224920/dns-a-vs-ns-record):
- **NS record** = "If you want to know about hosts in the foo.com zone, ask the name server ns1.bar.com"
- **A record** = "The host called foo.com lives at address 192.168.100.1"
