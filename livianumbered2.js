function showpageCount(a) {
    for (var e, s = home_page_url, n = new Array, t = 1, r = 1, l = 0, p = 0, i = 0, o = "", h = "", g = "", d = 0; e = a.feed.entry[d]; d++) {
        var m = e.published.$t.substring(0, 19) + e.published.$t.substring(23, 29);
        timestamp = encodeURIComponent(m);
        var u = e.title.$t;
        "" != u && (0 != l && l % pageCount != pageCount - 1 || (-1 != s.indexOf(timestamp) && (t = r), "" != u && r++, n[n.length] = "/search?updated-max=" + timestamp + "&max-results=" + pageCount)), l++
    }
    for (b = 0; b < n.length; b++) b >= t - displayPageNum - 1 && b < t + displayPageNum && (0 == p && b == t - 2 && (h = 2 == t ? '<span class="showpage"><a href="/">' + upPageWord + "</a></span>" : '<span class="showpage"><a href="' + n[b] + '">' + upPageWord + "</a></span>", p++), o += b == t - 1 ? '<span class="showpagePoint">' + t + "</span>" : 0 == b ? '<span class="showpageNum"><a href="/">1</a></span>' : '<span class="showpageNum"><a href="' + n[b] + '">' + (b + 1) + "</a></span>", 0 == i && b == t && (g = '<span class="showpage"> <a href="' + n[b] + '">' + downPageWord + "</a></span>", i++));
    t > 1 && (o = h + " " + o + " "), o = '<div class="showpageArea"><span style="COLOR: #000;" class="showpageOf"> Pages (' + (r - 1) + ")</span>" + o, t < r - 1 && (o += g), 1 == r && r++, o += "</div>";
    var c = document.getElementsByName("pageArea"),
        f = document.getElementById("blog-pager");
    r <= 2 && (o = "");
    for (var b = 0; b < c.length; b++) c[b].innerHTML = o;
    c && c.length > 0 && (o = ""), f && (f.innerHTML = o)
}

function showpageCount2(a) {
    for (var e, s = home_page_url, n = new Array, t = -1 != s.indexOf("/search/label/") ? s.substr(s.indexOf("/search/label/") + 14, s.length) : "", r = 1, l = 1, p = 0, i = 0, o = 0, h = "", g = "", d = "", m = '<span class="showpageNum"><a href="/search/label/' + (t = -1 != t.indexOf("?") ? t.substr(0, t.indexOf("?")) : t) + "?&max-results=" + pageCount + '">', s = home_page_url, u = 0; e = a.feed.entry[u]; u++) {
        var c = e.published.$t.substring(0, 19) + e.published.$t.substring(23, 29);
        timestamp = encodeURIComponent(c);
        var f = e.title.$t;
        "" != f && (0 != p && p % pageCount != pageCount - 1 || (-1 != s.indexOf(timestamp) && (r = l), "" != f && l++, n[n.length] = "/search/label/" + t + "?updated-max=" + timestamp + "&max-results=" + pageCount)), p++
    }
    for (w = 0; w < n.length; w++) w >= r - displayPageNum - 1 && w < r + displayPageNum && (0 == i && w == r - 2 && (g = 2 == r ? m + upPageWord + "</a></span>" : '<span class="showpage"><a href="' + n[w] + '">' + upPageWord + "</a></span>", i++), w == r - 1 ? h += '<span class="showpagePoint">' + r + "</span>" : 0 == w ? h = m + "1</a></span>" : h += '<span class="showpageNum"><a href="' + n[w] + '">' + (w + 1) + "</a></span>", 0 == o && w == r && (d = '<span class="showpage"> <a href="' + n[w] + '">' + downPageWord + "</a></span>", o++));
    r > 1 && (h = g + " " + h + " "), h = '<div class="showpageArea"><span class="showpageOf"> Pages (' + (l - 1) + ")</span>" + h, r < l - 1 && (h += d), 1 == l && l++, h += "</div>";
    var b = document.getElementsByName("pageArea"),
        x = document.getElementById("blog-pager");
    l <= 2 && (h = "");
    for (var w = 0; w < b.length; w++) b[w].innerHTML = h;
    b && b.length > 0 && (h = ""), x && (x.innerHTML = h)
}
var home_page_url = location.href,
    thisUrl = home_page_url;
if (-1 != thisUrl.indexOf("/search/label/"))
    if (-1 != thisUrl.indexOf("?updated-max")) var lblname1 = thisUrl.substring(thisUrl.indexOf("/search/label/") + 14, thisUrl.indexOf("?updated-max"));
    else var lblname1 = thisUrl.substring(thisUrl.indexOf("/search/label/") + 14, thisUrl.indexOf("?&max"));
var home_page = "/"; - 1 == thisUrl.indexOf("?q=") && (-1 == thisUrl.indexOf("/search/label/") ? document.write('<script src="' + home_page + 'feeds/posts/summary?alt=json-in-script&callback=showpageCount&max-results=99999" ><\/script>') : document.write('<script src="' + home_page + "feeds/posts/full/-/" + lblname1 + '?alt=json-in-script&callback=showpageCount2&max-results=99999" ><\/script>')), $(document).ready(function() {
    var a = $(".ism-testimonial");
    $(".testimonials-authors li").hover(function() {
        var e = $(this),
            s = "active-testimonial",
            n = e.index(),
            t = e.siblings("." + s).index();
        e.hasClass(s) || (e.siblings("li").removeClass(s).end().addClass(s), a.eq(t).stop(!0, !0).animate({
            opacity: 0
        }, 100, function() {
            $(this).hide(), a.eq(n).css({
                display: "block",
                opacity: 0
            }).animate({
                opacity: 1
            }, 100)
        }))
    })
});
jQuery(document).ready(function(e) {
    e("#owl-demo").owlCarousel({
        autoPlay: 3000,
        navigation: false,
        autoHeight: true,
        items: 2,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [768, 2],
        itemsTabletSmall: [568, 1],
        itemsMobile: [479, 1]
    })
});
