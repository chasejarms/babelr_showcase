### Background

Material UI is a popular tool for implementing clean UI components in a React application. Aside from making development quicker, it also helps engineers create beautiful designs on the fly without having to focus on extensive styling. Material You and I is designed to quickly teach the Material UI Library with interactive components and example code ready for production.

### Required Knowledge

This guide is useful as an introduction to the components available in the Material UI library.
Before using any code in your production projects, it is recommended you go through the [Getting Started](http://www.material-ui.com/#/get-started/installation) folder of the Material UI documentation which sets up the boilerplate for these components.

### Architecture

Material You and I uses React with Redux to quickly manage state changes from user interaction. The live component, documentation container, and live code container all take in the same slice of state (currentComponent), which has three main keys - name, properties, and documentation.

When the user interacts with the documentation container, an action is dispatched with the value of the input they are using as well as the property name. This triggers a re-render of the underlying Material UI component in view as well as the live code container.

### Application View

![Full Screen View](./docs/material-you-and-i-full-screen.gif)

### Roadmap

The current priorities for future implementation are:

1. Implement a guided tour of the project to ensure the site is easy to understand and use.

2. Continue working through additional Material UI components until the entire library is included.

3. Add in a copy to clipboard button for the code examples.
