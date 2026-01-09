export function Badge({ variant = "default", className = "", children, ...props }) {
  const variantClasses = {
    default: "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100",
    outline: "border border-gray-300 dark:border-gray-700 bg-transparent",
    secondary: "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100",
    destructive: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400",
    success: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400",
    warning: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400",
    info: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400",
    purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400",
  }

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}
