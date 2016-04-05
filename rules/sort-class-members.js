'use strict';

module.exports = {
  'plugins': [ 'sort-class-members' ],
  'rules': {
    'sort-class-members/sort-class-members': [2, {
      'groups': {
        'constructor': {
          'kind': 'constructor',
          'name': 'constructor'
        },
        'private-accessor-pairs': {
          'accessorPair': true,
          'name': '/_.+/'
        },
        'private-getters': {
          'kind': 'get',
          'name': '/_.+/'
        },
        'private-methods': {
          'type': 'method',
          'name': '/_.+/'
        },
        'private-properties': {
          'type': 'property',
          'name': '/_.+/'
        },
        'private-setters': {
          'kind': 'set',
          'name': '/_.+/'
        },
        'public-accessor-pairs': {
          'accessorPair': true,
          'name': '/[^_].+/'
        },
        'public-getters': {
          'kind': 'get',
          'name': '/[^_].+/'
        },
        'public-methods': {
          'type': 'method',
          'name': '/[^_](.+)/'
        },
        'public-properties': {
          'type': 'property',
          'name': '/[^_].+/'
        },
        'public-setters': {
          'kind': 'set',
          'name': '/[^_].+/'
        },
        'static-private-methods': {
          'static': true,
          'type': 'method',
          'name': '/_.+/'
        },
        'static-public-methods': {
          'static': true,
          'type': 'method',
          'name': '/[^_].+/'
        },
        'static-private-properties': {
          'static': true,
          'type': 'property',
          'name': '/_.+/'
        },
        'static-public-properties': {
          'static': true,
          'type': 'property',
          'name': '/[^_].+/'
        }
      },
      'order': [
        '[public-properties]',
        '[constructor]',
        '[public-getters]',
        '[public-setters]',
        '[public-accessor-pairs]',
        '[public-methods]',
        '[private-properties]',
        '[private-getters]',
        '[private-setters]',
        '[private-accessor-pairs]',
        '[private-methods]',
        '[static-public-properties]',
        '[static-public-methods]',
        '[static-private-properties]',
        '[static-private-methods]'
      ]
    }]
  }
};
