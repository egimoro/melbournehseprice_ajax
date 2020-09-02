# Melbourne Housing Market

Before showing how this web app works let's see a few key details:

Suburb: Suburb

Address: Address

Rooms: Number of rooms

Price: Price in Australian dollars

Method:
S - property sold;
SP - property sold prior;
PI - property passed in;
PN - sold prior not disclosed;
SN - sold not disclosed;
NB - no bid;

Type:
br - bedroom(s);
h - house,cottage,villa, semi,terrace;
u - unit, duplex;
t - townhouse;

Date: Date sold

# Technical parts

To start a project:

        django-admin start project yourwebsite

To start an app:
        
        py or python  manage.py startapp yourapp

The javascript library jquery makes the templates more dynamic for example:

        $('#addHouse').bind('submit', function(){
            // your operation
        })



