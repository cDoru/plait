# Motivation

Plait came from the idea that there are only really three key parts required to build a reactive JavaScript application: state management, event delegation, and virtual DOM rendering.

Inspired by the model-view-update architecture of [Elm](http://elm-lang.org/), the goal of Plait was to provide a framework for creating reactive components &mdash; without actually writing a framework. In under 200 lines of code, Plait manages to achieve this by gluing together three libraries:

* [**Redux**](https://github.com/rackt/redux), which provides state management and is the backbone of the reactive "update" cycle.
* [**virtual-dom**](https://github.com/Matt-Esch/virtual-dom), which provides virtual DOM rendering.
* [**dom-delegator**](https://github.com/Raynos/dom-delegator), which transparently delegates DOM events.

Plait itself only implements two things:

* An immutable state container, which enforces a pure update cycle within components.
* Event forwarding, to facilitate the nesting of components.

Everything else is either glue between the other libraries, or convenience functions to make interfacing with the other libraries easier.
