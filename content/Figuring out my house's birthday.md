# Figuring out my house's birthday
#publish 
Written [[2025-W38|2025-09-19]]. Backlink: [[Musings on everything else]].

I recently wondered: "How old is my house?"

## Spoilers
It's around **125 years old**, as ownership of the underlying land was passed from one John H Hegler to Rose Hegler (presumably his daughter) on **Sept 12, 1900**:

![[Screenshot 2025-09-18 at 5.52.40 PM 2.png]]
_From https://archive.org/details/mccords-edwards-abstract-from-records_1900-12-31_no-2610-no-2912/page/n9/mode/2up, page 443_

This record is about `N Haight 76-3 E Buchanan E 30 x N 137-6` , which translated from 1900s-era surveyor terminology means:
- `N Haight` - On the north side of Haight Street.
- `E Buchanan` - On the east side of Buchanan Street.
- `76-3` - Lot 76, block 3.
    - This is old terminology for a [plat map](https://en.wikipedia.org/wiki/Plat) coordinate.
    - I can't find any plat maps of San Francisco from 1900. But [here](https://www.davidrumsey.com/luna/servlet/detail/RUMSEY~8~1~206~10177:Guide-Map-Of-The-City-Of-San-Franci) is one from 1890, which shows the 3rd block in each Haight-Ashbury lot is always the southwest corner block -- which is correct for 226 Haight (although the lot numbering is different for some reason): ![[Screenshot 2025-09-19 at 11.52.14 PM.png]]
    - Same area on Google Maps: ![[Screenshot 2025-09-20 at 12.08.14 AM.png]]
- Lastly, `E 30 x N 137-6` indicates the dimensions of the land. It means the property lot is 30 feet wide along its eastward side, and 137 feet and 6 inches wide along its northward side.
    - This is the most important part.
    - Looking at Google Maps, 30' x 137.5' are _exactly_ the dimensions of the land my house is on:
        - ![[Screenshot 2025-09-20 at 12.00.31 AM.png]]
        - ![[Screenshot 2025-09-20 at 12.01.41 AM.png]]
        - That's so cool!

The real question is: what exactly did Rose inherit from John in that record? Does "homestead" mean undeveloped land? Or a house? I'm guessing the land was already developed, since San Francisco in 1900 had [>340k residents](https://en.wikipedia.org/wiki/Demographics_of_San_Francisco) -- meaning most patches of land in central neighborhoods like Haight-Ashbury would have homes. But homes were built quickly and it's possible this one was constructed within the year.

Overall: most Victorian homes in Haight-Ashbury were [built between 1890-1910](https://www.sfheritage.org/heritage-in-the-neighborhoods/haight-ashburys-retail-beginnings/#:~:text=Most%20of%20Haight%2DAshbury's%20residential,as%20the%20Stanyan%20Park%20Hotel.). So 226's birthyear is likely 1900 +/- 10 years anyhow.

**UPDATE ([[2025-W38|2025-09-20]]):** Found a fire insurance map from 1899. If 226 is on that map, the house must be older. If it's not on the map, then 1900 is confirmed its birthyear! I will investigate and update.

## How I got this far
Real estate platforms [Compass](https://www.compass.com/listing/226-228-haight-street-san-francisco-ca-94102/25101414992746065/) and [Realtor dot com](https://www.realtor.com/realestateandhomes-detail/228-Haight-St-226_San-Francisco_CA_94102_M95097-74295) both report 226 Haight being built in the year 1900. Which might turn out to be untrue, but this was my starting point.
- Shoutout to Zumper for using a bizarre 50s-era black and white photograph as their thumbnail for 226 Haight, for some reason ([link](https://www.zumper.com/address/226-haight-st-san-francisco-ca-94102-usa), [[Screenshot 2025-09-20 at 12.40.28 AM.png|screenshot]])
    - The fact that Zumper lists the square footage as 1900ft2 also seems suspicious. Could that magic number be related to why other sites think the house was built in 1900?

Anyways, knowing the house's rough year of construction, I visited the SF Public Library's page for [How old is it? Who built it?](https://sfpl.org/locations/main-library/sf-history-center/how-research-san-francisco-building/how-old-it-who-built) to continue investigating. This directory is _super helpful_, and links out to a lot of records that tell you roughly how a house in SF is by proxy. For examples...

Spring Valley Water Company tap water records (1861-1930s)
- https://sflib1.sfpl.org/record=b2727934~S1
- Volumes are ordered by street name A-Z ascending, then year ascending.
- My house would theoretically be in Volume 3, somewhere between pages 451-471 (Haight St): https://archive.org/details/springvalleywate03unse/page/n451/mode/2up
    - But I can't find any records here related to the Hegler family, or more importantly anything on the Buchanan cross street.
    - I'm guessing Buchanan St didn't have tap water available at this point.

Edwards Abstract from Records
- https://sflib1.sfpl.org/record=b1842376~S1
- Issued daily, this is a list of documents recorded in the city, such as deeds, permits, sales. Under "Miscellaneous Papers" are Building Contracts, which list the owner, contractor, architect and cost of construction for individual buildings.
- There's only [1 volume for 1900](https://archive.org/details/sfpl_mccords-edwards-abstract-from-records?tab=collection&query=1900), which theoretically would be where I'd find my house.
    - By poring through the addresses manually, I found a few notable addresses at some familiar cross streets:
        - `S Haight 87-6 E Laguna E 50 x S 137-6`
            - Pages 549, 603, 607 / 630
        - `E Buchanan 120 N Haight N 17-6 x E 76-3`
            - Page 571 / 630
        - `N Haight 76-3 E Buchanan E 30 x N 137-6`
            - Pages 443, 461 / 630
            - This is it!
            - This is the one I took the screenshot of after learning the address format.
            - There's another reference on page 461 noting a lis pendens on Sept 22: ![[Screenshot 2025-09-18 at 5.53.36 PM 2.png]]
                - I'm honestly not sure what this means.
                - My guess is the title deed officially changed hands to Rose on Sept 22, however they use the word "foreclose" which doesn't track what I think is happening here.
                - Further investigation warranted.

TODO: Fire insurance records
