class NavBar extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <div id="nav">
                <div class="nav-content">
                    <div id="logo" onclick="window.location='/';">Trey Yang</div>
                    <a href="/projects">Projects</a>
                    <a href="/contact">Contact</a>
                    <a href="/aboutme">About Me</a>
                </div>  
            </div>
        `;
    }
}

class WarpField extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        var x = new WarpSpeed("canvas", {
            "speed": 2,
            "speedAdjFactor": 0.5,
            "density": 1,
            "shape": "square",
            "warpEffect": true,
            "warpEffectLength": 5,
            "depthFade": true,
            "starSize": 5,
            "backgroundColor": "#202020",
            "starColor": "#EEEEEE"
        });

    }
}

class WarpField404 extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        var x = new WarpSpeed("canvas", {
            "speed": 1,
            "speedAdjFactor": 0.5,
            "density": 1,
            "shape": "square",
            "warpEffect": true,
            "warpEffectLength": 15,
            "depthFade": true,
            "starSize": 5,
            "backgroundColor": "#0A0A0A",
            "starColor": "#ff2e4a"
        });

    }
}

class Footer extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <div id="footer-bg" style="position:fixed;">
            <div id="footer-txt"> &#169; 2022 Trey Yang. All rights reserved.</div>
            </div>
        `;
    }
}

customElements.define('component-navbar', NavBar);
customElements.define('component-warpfield', WarpField);
customElements.define('component-warpfield404', WarpField404);
customElements.define('component-footer', Footer);
