import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <div
      style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}
    >
      <SearchBar />
      <p>Home works!</p>
    </div>
  );
};

export default Home;
