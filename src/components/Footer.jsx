import React from 'react';
function Footer() {
    return (
        <footer className="page-footer teal darken-4">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a className="grey-text text-lighten-4 right" href="https://vladust.github.io/recipe-book/">
                        Repo
                    </a>
                </div>
            </div>
        </footer>
    );
}

export { Footer };
