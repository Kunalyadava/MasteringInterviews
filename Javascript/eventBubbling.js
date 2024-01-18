// Event Bubbling:

// In event bubbling, the event starts from the target element that triggered 
// the event and bubbles up through its ancestors in the DOM hierarchy.
// The event handler of the target element is executed first, 
// followed by its ancestors in order, moving up the DOM tree.
// This is the default behavior in most browsers.


// If you click the button, you'll get two alerts: first "Button clicked!" 
// and then "Parent div clicked!".

// Event Capturing:

// In event capturing, the event starts from the topmost ancestor 
// and trickles down through its descendants to the target element.
// The event handlers of the ancestors are executed in order, 
// moving down the DOM tree, before reaching the target element.
// Event capturing is less commonly used than event bubbling.

//By default, event handlers use event bubbling, 



// event.preventDefault():

// This method is used to prevent the default action associated with an event from taking place.
// Many HTML elements have default behaviors associated with certain events. 
// For example, clicking on a link (<a> element) normally navigates to the 
// URL specified in the href attribute. By calling event.preventDefault() 
// in the event handler, you can prevent this default navigation behavior.
// It is commonly used with events like clicks on links or form submissions
//  to customize the behavior without triggering the default action.


// event.stopPropagation():

// This method is used to stop the propagation of the event through 
// the DOM hierarchy, either in the capturing or bubbling phase.
// It prevents the event from reaching the ancestors (in the case of bubbling)
//  or descendants (in the case of capturing) of the target element.
// It is often used when you don't want an event to trigger multiple handlers on different elements.