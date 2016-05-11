r"""Generate sample data based on text list:

Typical usage:

    $ python schools.py | python -m json.tool > schools.json

"""

import json
import uuid
from django.template.defaultfilters import slugify

with open('schools.txt') as f:
    items = []
    i = 1
    for line in f.readlines():
        id = str(uuid.uuid4())
        logo_id = i
        name = line.strip()
        slug = slugify(name)
        subdomain = slug.replace('university-of-', '') + '.egradgifts.com'
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
            }

        })

    print json.dumps(items)
