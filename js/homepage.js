import { LitElement, html } from '/vendor/polymer/lit-element.bundled.js'


class Homepage extends LitElement {
    // Declare properties
    static get properties() {
      return {
        game: Array
      }
    }

    constructor() {
        super()
        this.game = []
        this.load()
      }

    async load() {
       console.log("loading games: ")
    }
    
    render() {
        return html`
        <div>Welcome to 3d Tic Tac Toe!</div>
        <div>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <a-scene>
        <a-assets>
          <template id="user-template">
            <!-- Taken from the networked-aframe demo -->
            <a-entity class="avatar">
              <a-sphere class="head"
                color="#5985ff"
                scale="0.45 0.5 0.4"
                random-color
              ></a-sphere>
              <a-entity class="face"
                position="0 0.05 0"
              >
                <a-sphere class="eye"
                  color="#efefef"
                  position="0.16 0.1 -0.35"
                  scale="0.12 0.12 0.12"
                >
                  <a-sphere class="pupil"
                    color="#000"
                    position="0 0 -1"
                    scale="0.2 0.2 0.2"
                  ></a-sphere>
                </a-sphere>
                <a-sphere class="eye"
                  color="#efefef"
                  position="-0.16 0.1 -0.35"
                  scale="0.12 0.12 0.12"
                >
                  <a-sphere class="pupil"
                    color="#000"
                    position="0 0 -1"
                    scale="0.2 0.2 0.2"
                  ></a-sphere>
                </a-sphere>
              </a-entity>
            </a-entity>
          </template>
        </a-assets>
        <a-entity
          camera
          look-controls
          wasd-controls
          position="2 2 1"
        ></a-entity>
        <a-sphere position="1.25 1.25 -5" radius="0.25" color="#EF2D5E"></a-sphere>
        <a-box    position="1.25 2.25 -5" rotation="0 0 0" depth="0.45" width="0.45" height="0.45" color="#00EE00"></a-box>
        <a-sphere position="1.25 3.25 -5" radius="0.25" color="#0000EE"></a-sphere>
        <a-box    position="2.25 1.25 -5" rotation="0 0 0" depth="0.45" width="0.45" height="0.45" color="#EF2D5E"></a-box>
        <a-sphere position="2.25 2.25 -5" radius="0.25" color="#00EE00"></a-sphere>
        <a-box    position="2.25 3.25 -5" rotation="0 0 0" depth="0.45" width="0.45" height="0.45" color="#0000EE"></a-box>
        <a-sphere position="3.25 1.25 -5" radius="0.25" color="#EF2D5E"></a-sphere>
        <a-box    position="3.25 2.25 -5" rotation="0 0 0" depth="0.45" width="0.45" height="0.45" color="#00EE00"></a-box>
        <a-sphere position="3.25 3.25 -5" radius="0.25" color="#0000EE"></a-sphere>
        <a-box    position="1.25 1.25 -3.75" rotation="0 0 0" depth="0.45" width="0.45" height="0.45" color="#EF2D5E"></a-box>
        <a-sphere position="1.25 2.25 -3.75" radius="0.25" color="#00EE00"></a-sphere>
        <a-box    position="1.25 3.25 -3.75" rotation="0 0 0" depth="0.45" width="0.45" height="0.45" color="#0000EE"></a-box>
        <a-sphere position="2.25 1.25 -3.75" radius="0.25" color="#EF2D5E"></a-sphere>
        <a-box    position="2.25 2.25 -3.75" rotation="0 0 0" depth="0.45" width="0.45" height="0.45" color="#00EE00"></a-box>
        <a-sphere position="2.25 3.25 -3.75" radius="0.25" color="#0000EE"></a-sphere>
        <a-box    position="3.25 1.25 -3.75" rotation="0 0 0" depth="0.45" width="0.45" height="0.45" color="#EF2D5E"></a-box>
        <a-sphere position="3.25 2.25 -3.75" radius="0.25" color="#00EE00"></a-sphere>
        <a-box    position="3.25 3.25 -3.75" rotation="0 0 0" depth="0.45" width="0.45" height="0.45" color="#0000EE"></a-box>
        <a-sphere position="1.25 1.25 -2.50" radius="0.25" color="#EF2D5E"></a-sphere>
        <a-box    position="1.25 2.25 -2.50" rotation="0 0 0" depth="0.45" width="0.45" height="0.45" color="#00EE00"></a-box>
        <a-sphere position="1.25 3.25 -2.50" radius="0.25" color="#0000EE"></a-sphere>
        <a-box    position="2.25 1.25 -2.50" rotation="0 0 0" depth="0.45" width="0.45" height="0.45" color="#EF2D5E"></a-box>
        <a-sphere position="2.25 2.25 -2.50" radius="0.25" color="#00EE00"></a-sphere>
        <a-box    position="2.25 3.25 -2.50" rotation="0 0 0" depth="0.45" width="0.45" height="0.45" color="#0000EE"></a-box>
        <a-sphere position="3.25 1.25 -2.50" radius="0.25" color="#EF2D5E"></a-sphere>
        <a-box    position="3.25 2.25 -2.50" rotation="0 0 0" depth="0.45" width="0.45" height="0.45" color="#00EE00"></a-box>
        <a-sphere position="3.25 3.25 -2.50" radius="0.25" color="#0000EE"></a-sphere>
       
        <a-sky color="#ECECEC"></a-sky>
      </a-scene>
      </div>
        `
    }
    
}
// Register the element with the browser
customElements.define('x-homepage', Homepage);
