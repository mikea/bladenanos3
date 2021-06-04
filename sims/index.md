---
layout: layouts/home.njk
title: Simulators
eleventyNavigation:
  key: sims
  order: 3
---

I tried [RealFlight](https://www.realflight.com) and [neXt](https://www.cgm-online.com/rc-flight-simulator/rc-flight-simulator_e.html)
with the latter being my favorite.
I use Spektrum InterLink DX simulator controller to fly it.

## Time Scale

Slowing down simulator's time was the best thing I have
discovered. Start at 50% and gradually increase while working on a maneveur.

## neXt

Modern advanced RC heli simulator. Multi-platform (Win, Mac, Linux).
Advanced heli training modes: hover trainer, piro trainer, landing trainer.

### neXt on Linux

The neXt on Linux has joystick calibration utility which doesn't compile anymore.
By default joystick will have big dead zone. To solve it launch the sim with:

```bash
evdev-joystick \
    --evdev /dev/input/by-id/usb-Spektrum_InterLinkDX_2063354E4652-event-joystick \
    -d 0 && \
    ~/Packages/neXt/neXt.x86_64
```

### Binding Time Scale

You can assign the simulation speed to a transmitter channel.
`Settings > Input Device > Functions` and pree `o`. You will be able to bind
time scale.
