# Keebs-GB

This is a proposal of uniformity of all the group buys occurring in the mechanical keyboard scene on the internet.

## Why?

The idea came about when I figured out the number of interesting group buys I wanted to join but missed out on because they were hidden in numerous threads. So, the idea is to find a solution **TOGETHER** to have a uniform and easy way to aggregate all the current group buys occurring. Here is a proposal. If we could reach a standard format, then we can build an aggregator for all the GB and make it easier for everyone to monitor and join group buys. The main goal is to provide a list of Group Buys with their status and link to community post. Nothing fancy.

**NOTE**: this project is COMPLETELY PROFITLESS and will stay this way.

## communities

Right now, the communities considered for aggregation are as follows

- Geek Hack
- Reddit
- Desk Authority
- Keeb Talk

Any others?

## Constraints

All the communities listed above are not using a standard forum framework, post format’s and so on. Also, people running Group Buys may not want to post to another platform. We are not planning to make an alternate platform to accomplish our goal.

## Proposal

### Standard Data Format

Here is an updated proposal homerowco has done on [geekhack](https://geekhack.org/index.php?topic=57761.msg2759293#msg2759293).

```json
{
  "name": "My Group By",
  "author": "homerowco",
  "start": "2019-05-06T18:25:43.511Z", // using ISO format 
  "end": "2019-05-25T18:00:43.511Z", // using ISO format 
  "link": "https://www.geekhack.com/index.php?main-link-optional",
  "form": "https://google.form/optional",
  "links": {
    "geekhack": "https://www.geekhack.com/index.php?main-link-or-other",
    "reddit": "https://www.reddit.com/also-a-link"
  },
  "contact": {
    "discord": "https://discord.gg/123",
    "reddit": "homerowco",
    "geekhack": "homerowco",
    "email": "support@homerow.co"
  }
}
```
_note_: Datetime validation reference : https://json-schema.org/understanding-json-schema/reference/string.html#format

This is an entry that can be stored in a json file in Github repository. Which will be available easily for everyone. This repository is not meant to provide an app, just the data to be used by any website.

Also for each addition in a Pull Request the Travis CI is used to ensure the data fits the json schema.