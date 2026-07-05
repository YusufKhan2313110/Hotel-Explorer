function SearchBar({ search, setSearch }) {
  return (
    <div className="mb-10">
      <input
        type="text"
        placeholder="Search hotels by name or location..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-4 rounded-xl border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default SearchBar;