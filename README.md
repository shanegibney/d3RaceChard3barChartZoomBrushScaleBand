# D3 v4 Bar Chart, Zoom and Brush with scaleBand()

This code is an application of Izanuk's [D3: Unit Bar Chart with Brush and Zoom](https://bl.ocks.org/misanuk/fc39ecc400eed9a3300d807783ef7607) to a bar-chart with D3.js v4.

But the difficulty arises when using scaleBand(). Got help with this on [stackoverflow](https://stackoverflow.com/questions/46015240/)

```
function brushed() {
  if (d3.event.sourceEvent && d3.event.sourceEvent.type === "zoom") return; // ignore brush-by-zoom

  // get bounds of selection
  var s = d3.event.selection,
    nD = [];
  x2.domain().forEach((d) => {
    var pos = x2(d) + x2.bandwidth() / 2;
    if (pos > s[0] && pos < s[1]) {
      console.log(nD);
      nD.push(d);
    }
  });

  x.domain(nD);

  focus.selectAll(".mainBars")
    .style("opacity", function(d) {
      return x.domain().indexOf(d.name) === -1 ? 0 : 100;
    })
    .attr("x", function(d) {
      return x(d.name) + x.bandwidth() / 2 - 5;
      // return x(d.name);
    })
    .attr("y", function(d) {
      return y(d.val);
    })
    .attr('height', function(d, i) {
      return height - y(d.val)
    })
    .attr('opacity', 0.85)
    .attr('width', 10);


  focus.select(".x.axis").call(xAxis);

  svg.select(".zoom").call(zoom.transform, d3.zoomIdentity
    .scale(width / (s[1] - s[0]))
    .translate(-s[0], 0));
}
```

gh-pages [demo](https://shanegibney.github.io/d3RaceChard3barChartZoomBrushScaleBand/)

<img width="1231" alt="screen shot 2017-09-03 at 14 19 49" src="https://user-images.githubusercontent.com/17167992/30003297-0292855e-90b3-11e7-93dd-9c68a0632b43.png">
