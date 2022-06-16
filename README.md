# ep_dautoscrolldown
This module will add two buttons in the Editbar Menu. One button will scroll the pad to the bottom and another will make it auto scroll to bottom.
## About
The module was originally made for [CORD](https://resolveoncord.com/), an institution that facilitates fair, fast and accessible dispute resolution. 

Before that They were using [ep_autoscrolldown](https://github.com/benoitlathiere/ep_autoscrolldown), but it has not been maintained for years and doesn't work as expected. so the very idea of this module came from `ep_autoscrolldown`, and thanks to [Benoit Lathiere](https://github.com/benoitlathiere) for creating that module.
## Settings
In the Etherpad setting.json file you can add some lines to change the behaviour of the module.
```json
// setting.json
{
    "ep_dautoscrolldown": {
        "displayButton": true, // true | false
        "onLoad": "read-only" // read-only | write-only | both | off
    }
}
```
### displayButton
If it is false, then the Scroll to Down button will be hidden. otherwise it will be there.
### onLoad
The Auto Scroll to Down button will be active after the load or not this will decide.
`read-only` only be active on read-only pad, `write-only` will be active on if the pad has the permission to write, `both` make it active on both, and `off` is just off.