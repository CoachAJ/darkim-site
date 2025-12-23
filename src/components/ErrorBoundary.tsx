import { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      hasError: false,
      error: null
    }
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center section-padding bg-gradient-to-b from-black to-gray-900">
          <div className="container-max text-center">
            <h1 className="text-6xl font-serif font-bold text-gold mb-4">
              Something Went Wrong
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              An unexpected error occurred. Like a scratched vinyl, we hit a bump in the groove.
            </p>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="bg-gray-900 border border-red-500/20 rounded-lg p-6 max-w-2xl mx-auto mb-8 text-left">
                <p className="text-red-400 font-mono text-sm mb-2">
                  {this.state.error.toString()}
                </p>
                <pre className="text-gray-500 text-xs overflow-auto">
                  {this.state.error.stack}
                </pre>
              </div>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.href = '/'}
                className="btn-primary text-lg px-8 py-4"
              >
                Return Home
              </button>
              <button 
                onClick={() => window.location.reload()}
                className="btn-secondary text-lg px-8 py-4"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
