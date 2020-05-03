import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error(error.toString());
    console.error(errorInfo.componentStack);
    
  }

  render() {
    if (this.state.hasError) {
      return (
        <p style={{ color: "red" }}>Fallback UI given there was an Error</p>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
