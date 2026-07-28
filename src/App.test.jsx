import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import Header from "/components/header";
import About from "/components/about";
import ArticleList from "/components/article-list";
import Article from "/components/article";

// --- App: smoke test that everything renders together -----------------
describe("App", () => {
  it("renders the header, about section, and every article", () => {
    render(<App />);

    // Header rendered with its name prop
    expect(
      screen.getByRole("heading", { level: 1, name: "My Blog" })
    ).toBeInTheDocument();

    // About section rendered with alt text
    expect(screen.getByAltText("blog logo")).toBeInTheDocument();

    // ArticleList rendered all 3 sample posts as h3 headings
    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(3);
    expect(screen.getByText("React + vite")).toBeInTheDocument();
  });
});

// --- Header: prop-based rendering --------------------------------------
describe("Header", () => {
  it("displays the name passed in as a prop", () => {
    render(<Header name="My Test Blog" />);
    expect(
      screen.getByRole("heading", { level: 1, name: "My Test Blog" })
    ).toBeInTheDocument();
  });
});

// --- About: prop-based rendering ----------------------------------------
describe("About", () => {
  it("displays the image (with alt text) and about text from props", () => {
    render(<About image="/logo.png" about="Test about text" />);
    const img = screen.getByAltText("blog logo");
    expect(img).toHaveAttribute("src", "/logo.png");
    expect(screen.getByText("Test about text")).toBeInTheDocument();
  });
});

// --- Article: prop-based rendering ---------------------------------------
describe("Article", () => {
  it("displays the title, date, and preview from props", () => {
    render(
      <Article
        title="Test Title"
        date="January 1, 2026"
        preview="Test preview text"
      />
    );
    expect(
      screen.getByRole("heading", { level: 3, name: "Test Title" })
    ).toBeInTheDocument();
    expect(screen.getByText("January 1, 2026")).toBeInTheDocument();
    expect(screen.getByText("Test preview text")).toBeInTheDocument();
  });
});

// --- ArticleList: renders one Article per post, each with a unique id key --
describe("ArticleList", () => {
  it("renders one Article per post in the posts array", () => {
    const posts = [
      { id: 1, title: "Post One", date: "Jan 1", preview: "Preview one" },
      { id: 2, title: "Post Two", date: "Jan 2", preview: "Preview two" },
    ];
    render(<ArticleList posts={posts} />);
    expect(screen.getAllByRole("article")).toHaveLength(2);
    expect(screen.getByText("Post One")).toBeInTheDocument();
    expect(screen.getByText("Post Two")).toBeInTheDocument();
  });

  it("renders nothing when the posts array is empty", () => {
    render(<ArticleList posts={[]} />);
    expect(screen.queryAllByRole("article")).toHaveLength(0);
  });
});
