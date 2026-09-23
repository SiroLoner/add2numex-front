type ErrorBannerProps = { message: string }

export function ErrorBanner({ message }: ErrorBannerProps) {
  return <div className="error-banner" role="alert"><span aria-hidden="true">!</span><p>{message}</p></div>
}
