import Service from "./service";

interface AppScreenProps {
  visibleApps: AppProps[];
  hiddenApps: AppProps[];
}

export default function ServiceTable() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-900">
      <div className="relative w-80 h-80">
        {visibleApps.map((app, index) => (
          <App
            key={app.title}
            {...app}
            style={{ left: `${index % 2 * 50}%`, top: `${Math.floor(index / 2) * 50}%` }}
          />
        ))}
        {hiddenApps.map((app, index) => (
          <App
            key={app.title}
            {...app}
            style={{
              left: `${(index % 2 + 2) * 50}%`,
              top: `${Math.floor(index / 2) * 50}%`,
              opacity: 0,
            }}
          />
        ))}
      </div>
    </div>
}