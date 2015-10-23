![Drupalcamp Cebu 2015 logo](https://2015.drupalcebu.org/themes/custom/drupalcampcebu2015/public/images/camp15-logo.jpg)

[Drupalcamp Cebu 2015](https://2015.drupalcebu.org/) is a conference about Drupal and Open Source technologies organized in Cebu City, Philippines.
==================

## Get started!

You want to help? Awesome!

The website for Drupalcamp is made using [Drupal 8](https://www.drupal.org/8). [Checkout the requirements for Drupal 8](https://www.drupal.org/requirements)

Here is how to setup your local version of the site:

  1. Have a working VM or equivalent, for Drupal 8. We recommend the open source [Drupal-vm](https://github.com/geerlingguy/drupal-vm), Virtual Machine for drupal 7/8 with a provision using ansible.
  2. Install Drupal 8 with the "minimal" profile.
  3. Import the reference database from the db-ref folder.
  4. Copy the file reference folder from files-ref in www/sites/default.
  5. Import the configuration : $ drush cim
  6. Clear the cache : $ drush cr
  7. You are ready to roll ! Start looking at the [site's issues](https://github.com/promet/drupalcampcebu2015/issues).

## Drupalcamp Cebu 2015 repository folders

Folders:

* config : D8 configuration system
* db-ref : Database reference for devs.
* files-ref : Various images for devs.
* static : Static version before drupal.
* www : Drupal 8 version of the site.

## MVP tasks

- [x] Web design PSD (Luc Bezier).
- [x] Static version (Mary Chris Casis).
- [x] Drupal 8 version MVP (Mary Chris Casis, Leo Tan, Luc Bezier).
- [x] Live server setup (Vincent Caballo, Zakatell Kanda)

## Contact list

* Front end Lead: Leo Tan
* Front end and site building : Mary Chris Casis
* Back end: Luc Bezier
