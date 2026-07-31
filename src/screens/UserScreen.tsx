import { useEffect, useState } from "react";
import Header from "../components/Header";
import useRequestData from "../store/requestData";
import { useRequest } from "../hooks/useRequest";
const user = {
  fullName: "Daniyal Asif",
  username: "@daniyal",
  email: "daniyal@example.com",
  role: "User",
  verified: true,
};

const User = () => {
  const [endpoint, setEndpoint] = useState<string>("");
  const [method, setMethod] = useState<string>("");
  const Mutation = useRequest();

  const [body, setBody] = useState<string>(`{
     "fullName" :"",
     "password":"",
     "email":"",
    }`);

  const [response, setResponse] = useState("Waiting for request...");
  const [status, setStatus] = useState("");
 
  const clearResponse = () => {
    setResponse("Waiting for request...");
    setStatus("");
  };

  const copyResponse = async () => {
    await navigator.clipboard.writeText(response);
  };
  const { Method, endPoint, requestBoady } = useRequestData((state) => state);

  const { setEndPointZustand, setMethodZustand, setRequestBoadyZustand } =
    useRequestData();
  useEffect(() => {
    console.log(body, endpoint, method);
    console.log(requestBoady, "requestBody");
  }, [body, endpoint, method, requestBoady]);
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Top Bar */}
      <section className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-xl font-bold text-gray-900">
              Welcome, {user.fullName}
            </h1>

            <p className="text-sm text-gray-500">{user.username}</p>
          </div>

          <button
            className="rounded-xl border border-gray-300 px-5 py-2 font-medium transition hover:bg-gray-100"
            onClick={() => {
              Mutation.mutate();
            }}
          >
            Logout
          </button>
        </div>
      </section>

      {/* Main */}
      <main className="mx-auto flex max-w-7xl gap-8 px-6 py-10">
        {/* User Information */}
        <section className="flex-1 rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">User Information</h2>

          <div className="mt-8 space-y-6">
            <div>
              <p className="text-sm text-gray-500">Full Name</p>
              <p className="font-medium">{user.fullName}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Username</p>
              <p className="font-medium">{user.username}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium">{user.email}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Role</p>
              <p className="font-medium">{user.role}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Verification</p>

              <span
                className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${
                  user.verified
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {user.verified ? "Verified" : "Not Verified"}
              </span>
            </div>
          </div>
        </section>

        {/* API Dashboard */}
        <aside className="w-[480px] rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">
            API Testing Dashboard
          </h2>

          <p className="mt-2 text-gray-600">
            Test your authenticated backend endpoints.
          </p>

          {/* Endpoint */}
          <div className="mt-6">
            <label className="text-sm font-medium text-gray-700">
              Endpoint
            </label>

            <input
              value={endpoint}
              onChange={(e) => setEndpoint(e.target.value)}
              placeholder="/users/current-user"
              className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
            />
          </div>

          {/* Method */}
          <div className="mt-5">
            <label className="text-sm font-medium text-gray-700">
              HTTP Method
            </label>

            <select
              value={method}
              onChange={(e) => {
                setMethod(e.target.value);
                setMethodZustand(e.target.value);
              }}
              className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
            >
              <option>GET</option>
              <option>POST</option>
              <option>PUT</option>
              <option>PATCH</option>
              <option>DELETE</option>
            </select>
          </div>

          {/* Request Body */}
          {method !== "GET" && method !== "DELETE" && (
            <div className="mt-5">
              <label className="text-sm font-medium text-gray-700">
                Request Body (JSON)
              </label>

              <textarea
                rows={8}
                value={body}
                onChange={(e) => {
                  setBody(e.target.value);

                }}
                className="mt-2 w-full rounded-xl border border-gray-300 p-4 font-mono text-sm outline-none focus:border-black"
              />
            </div>
          )}

          {/* Buttons */}
          <div className="mt-6 flex gap-3">
            <button
              onClick={() => {
                setRequestBoadyZustand(JSON.parse(body));

                Mutation.mutate()
              }}
              disabled={false}
              className="flex-1 rounded-xl bg-black py-3 font-medium text-white transition hover:bg-gray-800 disabled:opacity-60"
            >
              {Mutation.isPending ? "Sending..." : "Send Request"}
            </button>

            <button
              onClick={clearResponse}
              className="rounded-xl border border-gray-300 px-5 py-3 hover:bg-gray-100"
            >
              Clear
            </button>
          </div>

          {/* Status */}
          {status && (
            <div className="mt-5 rounded-xl bg-gray-100 p-3">
              <span className="font-medium">{status}</span>
            </div>
          )}

          {/* Response */}
          <div className="mt-6">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-semibold text-gray-900">Response</h3>

              <button
                onClick={copyResponse}
                className="rounded-lg border border-gray-300 px-3 py-1 text-sm hover:bg-gray-100"
              >
                Copy
              </button>
            </div>

            <pre className="h-80 overflow-auto rounded-xl bg-gray-900 p-5 text-sm leading-6 text-green-400">
              {JSON.stringify(Mutation.data)}
            </pre>
          </div>

          {/* Quick Endpoints */}
          <div className="mt-8">
            <h3 className="font-semibold text-gray-900">Quick Endpoints</h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "/update-email",
                "/update-password",
                "/delete-user",
                "/update-user",
                "/logout",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setEndpoint(item);
                    setEndPointZustand(item);
                  }}
                  className="rounded-lg border border-gray-300 px-3 py-2 text-sm transition hover:bg-gray-100"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default User;
