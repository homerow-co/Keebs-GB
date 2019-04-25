# Keebs-GH

This is a proposal of uniformity of all the group buys occurring in the mechanical keyboard scene on the internet.

## Why?

The idea came about when I figured out the number of interesting group buys I wanted to join but missed out on because they were hidden in numerous threads. So, the idea is to find a solution __TOGETHER__ to have a uniform and easy way to aggregate all the current group buys occurring. Here is a proposal. If we could reach a standard format, then we can build an aggregator for all the GB and make it easier for everyone to monitor and join group buys.

__NOTE__: this project is COMPLETELY PROFITLESS and will stay this way.

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

### Standard Post Format

Using a standard post format gives us a good chance of making this possible. For example https://www.reddit.com/r/mechmarket/ has a specific format for all the posts and for the group buys it's the same as https://geekhack.org/ .
The current format is as follows -
[GB] Text ....`
The issue with this approach is we cannot figure out crucial information regarding things like the region of the GB and end date. The proposal would be:
```
[GB] [REGION] [END-DATE] {TITLE} : {COMMENT}
```
#### Title

This describes the title of the group buy, which added to the region and date give us enough information to store it in the system.

#### Comment

I know some titles change during the group buy and it's normal, that's why this section has been added and could change through the progression of the group buy.

#### Region

This describe the region of the GB:
- US *United-States*
- EU *Europe*
- AS *Asia*
- WW *WorldWide*

#### End Date

This is the end date of the group buy. The date format is as follows: MM/DD/YYYY

## Questions

- Should the status of the group buy be added as a standard header format?
- Is it interesting to extend it to Interest Check?
