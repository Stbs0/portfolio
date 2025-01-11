export default async  function NotFound() {
  return (
    <div className="grid h-screen w-screen items-center justify-center text-center *:text-black">
      <div className="grid items-center justify-center">
        <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </div>
    </div>
  );
}
