import React from "react";

export default function reactHooks() {
  return (
    <div className="blog-container">
      <div className="blog-space2" />
      <img
        alt="img"
        className="blog-image"
        src="https://res.cloudinary.com/dsi0jbonx/image/upload/v1595877074/hooks_wgl3ir.png"
      />
      <p className="blog-text">This post is about React Hooks.</p>
      <p className="blog-text">What is React Hooks? </p>
      <p>
        React Hooks was officially released in February 2019. It was introduced
        to React to make state and side-effects available in React Function
        Component. React Hooks is not intended to replace class components and
        it is not necessary to rewrite existing codes.
      </p>
      <p className="blog-text">Benefits of React Hooks</p>
      <p>
        With hooks, you can make stateful logic between components easier.
        Previously , you would create a class component for a single container
        and use functional component for your other presentation components. Now
        you can use functional components for all your components and there
        would be no need to refactor your component if you decide that local
        state and lifecycle methods were needed. This will make it easier to
        separate containers without worrying about your local state. You can
        read , test , reuse the state logic from individual component without
        changing the component hierarchy. Using Hooks in functional components
        will also remove the use of certain concepts found in class components(
        binding, super, constructor, “this”, etc) thus resulting in less code.
      </p>
      <p className="blog-text">Using State Hooks</p>
      <p>
        The useState() hook allow developers to update, handle and manipulate
        state inside functional components. If we use class components, you will
        have to initialize the state of the component inside of a constructor
        method and invoke super first because you are extending the subclass for
        React.Component. You will need to bind all your methods to the
        constructor. Using class Component, we set the state of count to zero
        and we change the state of count when user clicks on a button by calling
        this.setState().
      </p>

      <img
        alt="img"
        className="blog-image2"
        src="https://res.cloudinary.com/dsi0jbonx/image/upload/v1595877741/Screen_Shot_2020-07-27_at_3.21.30_PM_jyrhfv.png"
      />
      <p />
      <p>
        For function component, we will change the state of count using
        useState. There is no “this” in function components. The function
        setCount will update the count when user click on the button.
      </p>
      <img
        alt="img"
        className="blog-image2"
        src="https://res.cloudinary.com/dsi0jbonx/image/upload/v1595877747/Screen_Shot_2020-07-27_at_3.21.51_PM_ajgt4n.png"
      />
      <p />
      <p className="blog-text">Best Practice for React Hooks </p>
      <p>
        Hooks will need to be called at the top level and not called inside
        loops, conditions or nested function. This will allow the Hooks to be
        called in the same order each time a component is rendered and allow
        React to preserve the state. Hooks should only be called from React
        function components.
      </p>
      <p />

      <div className="blog-space" />
    </div>
  );
}
