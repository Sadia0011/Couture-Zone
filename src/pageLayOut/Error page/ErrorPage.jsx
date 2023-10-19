const ErrorPage = () => {
  return (
    <div className="flex flex-col max-h-screen mt-20 my-auto justify-center items-center gap-4 ">
      <div className="w-1/2 ">
        <img
          src="https://i.ibb.co/93TCTwq/kostiantyn-li-Fi-nhg5it-Cw-unsplash.jpg"
          alt=""
          className="w-full max-h-[200px]"
        />
      </div>
      <div>
        <h2 className="text-5xl text-blue-800 my-6">Nothing to show</h2>
      </div>
    </div>
  );
};

export default ErrorPage;
