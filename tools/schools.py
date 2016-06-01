r"""Generate sample data based on text list:

Typical usage:

    $ python schools.py | python -m json.tool > schools.json

"""

import json
import uuid
from django.template.defaultfilters import slugify
from random import randint

with open('schools.txt') as f:
    items = []
    i = 1
    for line in f.readlines():
        id = str(uuid.uuid4())
        logo_id = i
        name = line.strip()
        slug = slugify(name)
        subdomain = (slug.replace('university-of-', '') + '.egradgifts.com')
        logo_url = 'https://placeholdit.imgix.net/~text?txtsize=33&txt={}&w=300&h=200'.format(slug[:10] + '...')
        i += 1

        items.append({
            "id": id,
            "name": name,
            "slug": slug,
            "logo": {
                "id": logo_id,
                "url": logo_url
            },
            "config": {
                "subdomain": subdomain
            },
            "skin": {
                "name": slug,
                "logo": logo_url,
                "class": "btn btn-block btn-xs txt-color-white margin-right-5",
                "style": "background-color:#{}E{}6{}F;".format(randint(0, 9), randint(0, 9), randint(0, 9)),
                "label": name,
                "variables": {
                    'background_color': '#{}{}{}'.format(randint(0, 9), randint(0, 9), randint(0, 9)),
                    'primary_color': '#F{}C6{}{}'.format(randint(0, 9), randint(0, 9), randint(0, 9)),
                    'primary_font_color': '#{}{}{}'.format(randint(0, 9), randint(0, 9), randint(0, 9)),
                    'secondary_color': '#{}{}{}'.format(randint(0, 9), randint(0, 9), randint(0, 9)),
                    'secondary_font_color': '#{}{}{}'.format(randint(0, 9), randint(0, 9), randint(0, 9)),
                    'accents_color': '#{}{}{}'.format(randint(0, 9), randint(0, 9), randint(0, 9)),
                    'packaging_color': '#{}4{}1B{}'.format(randint(0, 9), randint(0, 9), randint(0, 9)),
                    'sidebar_font_color': '#{}{}{}'.format(randint(0, 9), randint(0, 9), randint(0, 9)),
                    'cart_color': '#{}{}{}'.format(randint(0, 9), randint(0, 9), randint(0, 9)),
                    'footer_font_color': '#{}{}{}'.format(randint(0, 9), randint(0, 9), randint(0, 9)),
                    'success_color': '#{}FCC{}{}'.format(randint(0, 9), randint(0, 9), randint(0, 9)),
                    'info_color': '#{}C7{}C{}'.format(randint(0, 9), randint(0, 9), randint(0, 9)),
                    'egrad_color': '#{}{}b{}ea'.format(randint(0, 9), randint(0, 9), randint(0, 9)),
                }
            }
        })

    print json.dumps({
        'data': items,
        'meta': {
            'totalAmount': len(items)
        }
    })
