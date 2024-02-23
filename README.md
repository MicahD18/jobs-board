## Installation

##### 1. 'npm install' to install the dependencies
##### 2. 'npm run dev' to run local dev server

## Design

## ![Screenshot 2024-02-22 173256](https://github.com/MicahD18/jobs-board/assets/70763379/516897b8-0957-48b7-b915-a04a628302f6)
##### Design credit goes to https://www.frontendmentor.io/challenges/devjobs-web-app-HuvC_LP4l

### 1. UI
##### I began with building the UI components which included the Searchbar, Job Cards, Header, Footer, etc. https://www.frontendmentor.io/ provided the data.json file.

### 2. Routing
##### The project uses React Router for routing. I handled dynamic routing by getting the company name parameter from the Link.
### Code:
```typescript
const Detail: React.FC = () => {
  const params = useParams();
  const company = String(params.company);

  const [job, setJob] = useState<Job | null>(null);

  const handleJobFilter = useCallback(() => {
    jobs.map((item: Job) => {
      if (item.company === company) {
        setJob(item);
        return;
      }
    });
  }, [company]);

  useEffect(() => {
    handleJobFilter();
  }, [handleJobFilter]);
```
### 3. Dark/Light Mode
##### Dark/Light mode is handled by calling the toggle method on classList in the DOM. Global CSS variables were created for every color in the app.
### Code:
```typescript
const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark-mode", !darkMode);
  };
```
```css
/* Light Mode */
:root {
  --bg-color: #f4f6f8;
  --text-color: #000000;
  --card-color: white;
  --light-text-color: gray;
  --light-button-bg: #eff0fc;
  --light-button-text: #5964e0;
  --light-button-hover: #c4c8f4;
  --dark-button-bg: #5964e0;
  --dark-button-hover: #939bf4;
  --filter-icon: #6e8098;
}

/* Dark Mode */
:root.dark-mode {
  --bg-color: #121721;
  --text-color: #ffffff;
  --card-color: #19202d;
  --light-text-color: rgb(187, 187, 187);
  --light-button-bg: #303642;
  --light-button-text: #fff;
  --light-button-hover: #535862;
  --dark-button-bg: #5964e0;
  --dark-button-hover: #939bf4;
  --filter-icon: white;
}
```
### 4. Search and Filter Features
##### The search and filter features I handled all in one function. The Home component contains the main function, and the Searchbar is the child component. When the user makes changes to the search and filter inputs, those changes are saved to sessionStorage.
### Parent Component:
```typescript
const [searchInput, setSearchInput] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<string>("All");
  const [fullTimeOnly, setFullTimeOnly] = useState<boolean>(false);

  const filterItems = (input: string, location: string, fullTime: boolean) => {
    return jobs.filter((item) => {
      // if any object matches the input, return those objects that match
      const matchesSearch = Object.values(item).some((val) =>
        val.toString().toLowerCase().includes(input.toLowerCase())
      );
      // if location is "All", return all jobs postings that match ONLY the search input
      // Else return the job postings that match the location AND the search input
      const matchesLocation =
        location === "All" ? jobs : item.location === location;
      // same logic applies to full time only filter
      const isFullTimeOnly = fullTime ? item.contract === "Full Time" : jobs;

      return matchesSearch && matchesLocation && isFullTimeOnly;
    });
  };

  const filteredItems = filterItems(
    searchInput,
    selectedLocation,
    fullTimeOnly
  );

  useEffect(() => {
    // Load saved search input from local storage
    const savedSearchInput = sessionStorage.getItem("searchInput");

    if (savedSearchInput) setSearchInput(savedSearchInput);
  }, []);

  useEffect(() => {
    // Save search input to local storage
    sessionStorage.setItem("searchInput", searchInput);
  }, [searchInput]);
```
### Child Component:
```typescript
const [locations, setLocations] = useState<string[]>([]);
  const [show, setShow] = useState(false); // for filter modal
  const { width } = useWindowDimensions();

  const handleShow = () => setShow(true); // for filter modal

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleLocationChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedLocation(e.target.value);
    sessionStorage.setItem("selectedLocation", e.target.value);
  };

  const handleFullTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFullTimeOnly(e.target.checked);
    const fullTime = String(e.target.checked);

    sessionStorage.setItem("fullTime", fullTime);
  };

  const handleLocationFilter = useCallback(() => {
    const newLocations: string[] = [];

    jobs.forEach((job: Job) => {
      if (job.location && !newLocations.includes(job.location)) {
        newLocations.push(job.location);
      }
    });
    setLocations(newLocations);
  }, []);

  useEffect(() => {
    // Load saved selected location from local storage
    const savedSelectedLocation = sessionStorage.getItem("selectedLocation");
    const savedFullTime = sessionStorage.getItem("fullTime");
    const fullTime = Boolean(savedFullTime);

    if (savedSelectedLocation) setSelectedLocation(savedSelectedLocation);
    if (fullTime) setFullTimeOnly(fullTime);
  }, [setFullTimeOnly, setSelectedLocation]);

  useEffect(() => {
    handleLocationFilter();
  }, [handleLocationFilter]);
```
### Conclusion
##### This project only took me a few days to make, and it was fairly simple. But it solidified my knowledge in basic frontend development, such as creating reusable UI components, working with JSON data, routing, and search/filter functionality.




