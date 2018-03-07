# Monte-Carlo-Tool

The following simple demonstration performs Monte Carlo estimation to a user generated shape.

On an HTML canvas, a user can draw a shape with a specified number of points. Then, the user can run Monte Carlo estimation on
the entire canvas to calculate the area ratio of the shape to the canvas. The user can specify the number of points.

TO_DO:
- Implement a Point in Polygon algorithm to test the Monte Carlo estimation more robustly. Though this may slightly slow down the
performance, as the color of pixels is currently checked, which is agnostic to the shape complexity. The current monte carlo
gives a reasonable estimate, but for large sampling values, there can be some inaccuracy as the pixel colors get updated for the
simulation.
