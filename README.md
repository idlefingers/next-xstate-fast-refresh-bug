Small repo to show the xstate-react fast refresh bug.

To reproduce, install dependencies (`yarn install`), start the server (`yarn dev`), then:

1. In the browser, clicking the toggle button changes the state value from 'foo' to 'bar'
2. Change something in the component to trigger a fast refresh
3. Click the toggle button. State stops changing 😢
