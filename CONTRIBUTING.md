# Contributing to A Truth Universally Erased

Thank you for wanting to help! This tool is for everyone who loves Jane Austen and poetry, and it gets better when more people take part. You're welcome here whether you've never used GitHub before or you write code every day.

Everyone who takes part agrees to follow the [Code of Conduct](CODE_OF_CONDUCT.md), so that this stays a kind and welcoming place.

## Ways to help without coding

Most of the help requires no coding at all:

### Suggest a favorite page

Is there a page you'd love to erase? [Create a new issue](../../issues/new/choose) and choose **Suggest a favorite page**. The form asks which novel it's from, how the page begins, and what to call it.

### Report a problem

If something doesn't work or looks wrong, [create a new issue](../../issues/new/choose) and choose **Report a problem**. Tell me what happened. Screenshots are very helpful.

### Help test the tool

I want the tool to work on every kind of phone, tablet, and computer. Look for issues labeled [`testing`](../../issues?q=is%3Aopen+label%3Atesting), especially if you have a device or browser I haven't tried yet, such as an iPhone or iPad.

### Improve the wording

Clear instructions matter as much as working code. If something in the tool, the README, this guide, or any other documentation is confusing, tell me by reporting a problem.

### Find a task

Issues labeled [`no coding needed`](../../issues?q=is%3Aopen+label%3A%22no+coding+needed%22) are tasks anyone can help with. If you're new to GitHub and want to try a small change, look for [`good first issue`](../../issues?q=is%3Aopen+label%3A%22good+first+issue%22).

## Ways to help with code

### How the tool is built

The tool is a simple web app, written in plain HTML, CSS, and JavaScript, with no frameworks and no build step. It's published with GitHub Pages.

- `index.html`: the page, its styles, and its code
- `pages.js`: the list of favorite pages for each novel
- `texts/`: the novels, from Project Gutenberg's plain-text editions

### Try it on your own computer

1. Download the project (**Code** → **Download ZIP**), or clone it with Git:
   ```
   git clone https://github.com/[USERNAME]/a-truth-universally-erased.git
   ```
2. If you downloaded the ZIP file, extract it first. Keep all the files together in the same folder.
3. Open `index.html` in your web browser.

If you prefer a local web server, run this in the project folder, then go to `http://localhost:8000` in your browser:

```
python3 -m http.server
```

### Make a change

1. Open an issue that describes the change.
2. Fork the repository, then create a branch for your change.
3. Make your change, and test it on a computer and, if you can, on a phone.
4. Commit with a clear message that says what you changed, for example `Add three favorite pages from Persuasion`.
5. Open a pull request. In the description, write `Fixes #` with the issue number (for example, `Fixes #12`), so the issue closes when your change is merged.

#### Add a favorite page

Favorite pages are listed in `pages.js`. Follow the pattern of the existing entries: the novel, the first several words of the page (exactly as they appear in the text in the `texts` folder), and a short name. Then check that the page appears in the tool and starts in the right place.

### Guidelines

- **Keep it simple.** Let's keep the tool easy for everyone.
- **Accessibility comes first.** Changes should work with a keyboard and a screen reader, with larger text, and with strong color contrast.
- **Public domain texts only.** The tool uses only Jane Austen's public domain works, so every poem made with it is free to share. We don't add other texts or a way to paste in text.

## Questions?

[Open an issue](../../issues/new/choose) and ask. There are no silly questions.
