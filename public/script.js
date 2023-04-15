value="kurac"
function engraving(value) {
  Unlimited3D.updateOverlay({ overlay: 'ring_001', overlayEntry: 'letters', options: { text: value, } }, (e, r) => { console.log(e, r) });
}