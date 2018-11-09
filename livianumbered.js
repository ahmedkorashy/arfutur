function showpageCount(a) {
    for (var b, c = home_page_url, d = new Array(), e = 1, f = 1, g = 0, h = 0, i = 0, j = "", k = "", l = "", m = 0; b = a.feed.entry[m]; m++) {
        var n = b.published.$t.substring(0, 19) + b.published.$t.substring(23, 29);
        timestamp = encodeURIComponent(n);
        var o = b.title.$t;
        "" != o && (0 != g && g % pageCount != pageCount - 1 || (-1 != c.indexOf(timestamp) && (e = f),
                "" != o && f++, d[d.length] = "/search?updated-max=" + timestamp + "&max-results=" + pageCount)),
            g++;
    }
    for (r = 0; r < d.length; r++) r >= e - displayPageNum - 1 && r < e + displayPageNum && (0 == h && r == e - 2 && (k = 2 == e ? '<span class="showpage"><a href="/">' + upPageWord + "</a></span>" : '<span class="showpage"><a href="' + d[r] + '">' + upPageWord + "</a></span>",
            h++), j += r == e - 1 ? '<span class="showpagePoint">' + e + "</span>" : 0 == r ? '<span class="showpageNum"><a href="/">1</a></span>' : '<span class="showpageNum"><a href="' + d[r] + '">' + (r + 1) + "</a></span>",
        0 == i && r == e && (l = '<span class="showpage"> <a href="' + d[r] + '">' + downPageWord + "</a></span>",
            i++));
    e > 1 && (j = k + " " + j + " "), j = '<div class="showpageArea"><span style="COLOR: #000;" class="showpageOf"> Pages (' + (f - 1) + ")</span>" + j,
        e < f - 1 && (j += l), 1 == f && f++, j += "</div>";
    var p = document.getElementsByName("pageArea"),
        q = document.getElementById("blog-pager");
    f <= 2 && (j = "");
    for (var r = 0; r < p.length; r++) p[r].innerHTML = j;
    p && p.length > 0 && (j = ""), q && (q.innerHTML = j);
}

function showpageCount2(a) {
    for (var b, c = home_page_url, d = new Array(), e = -1 != c.indexOf("/search/label/") ? c.substr(c.indexOf("/search/label/") + 14, c.length) : "", f = 1, g = 1, h = 0, i = 0, j = 0, k = "", l = "", m = "", n = '<span class="showpageNum"><a href="/search/label/' + (e = -1 != e.indexOf("?") ? e.substr(0, e.indexOf("?")) : e) + "?&max-results=" + pageCount + '">', c = home_page_url, o = 0; b = a.feed.entry[o]; o++) {
        var p = b.published.$t.substring(0, 19) + b.published.$t.substring(23, 29);
        timestamp = encodeURIComponent(p);
        var q = b.title.$t;
        "" != q && (0 != h && h % pageCount != pageCount - 1 || (-1 != c.indexOf(timestamp) && (f = g),
                "" != q && g++, d[d.length] = "/search/label/" + e + "?updated-max=" + timestamp + "&max-results=" + pageCount)),
            h++;
    }
    for (t = 0; t < d.length; t++) t >= f - displayPageNum - 1 && t < f + displayPageNum && (0 == i && t == f - 2 && (l = 2 == f ? n + upPageWord + "</a></span>" : '<span class="showpage"><a href="' + d[t] + '">' + upPageWord + "</a></span>",
            i++), t == f - 1 ? k += '<span class="showpagePoint">' + f + "</span>" : 0 == t ? k = n + "1</a></span>" : k += '<span class="showpageNum"><a href="' + d[t] + '">' + (t + 1) + "</a></span>",
        0 == j && t == f && (m = '<span class="showpage"> <a href="' + d[t] + '">' + downPageWord + "</a></span>",
            j++));
    f > 1 && (k = l + " " + k + " "), k = '<div class="showpageArea"><span class="showpageOf"> Pages (' + (g - 1) + ")</span>" + k,
        f < g - 1 && (k += m), 1 == g && g++, k += "</div>";
    var r = document.getElementsByName("pageArea"),
        s = document.getElementById("blog-pager");
    g <= 2 && (k = "");
    for (var t = 0; t < r.length; t++) r[t].innerHTML = k;
    r && r.length > 0 && (k = ""), s && (s.innerHTML = k);
}

var home_page_url = location.href,
    thisUrl = home_page_url;

if (-1 != thisUrl.indexOf("/search/label/"))
    if (-1 != thisUrl.indexOf("?updated-max")) var lblname1 = thisUrl.substring(thisUrl.indexOf("/search/label/") + 14, thisUrl.indexOf("?updated-max"));
    else var lblname1 = thisUrl.substring(thisUrl.indexOf("/search/label/") + 14, thisUrl.indexOf("?&max"));

var home_page = "/";

- 1 == thisUrl.indexOf("?q=") && (-1 == thisUrl.indexOf("/search/label/") ? document.write('<script src="' + home_page + 'feeds/posts/summary?alt=json-in-script&callback=showpageCount&max-results=99999" ></script>') : document.write('<script src="' + home_page + "feeds/posts/full/-/" + lblname1 + '?alt=json-in-script&callback=showpageCount2&max-results=99999" ></script>')),
    $(document).ready(function() {
        var a = $(".ism-testimonial");
        $(".testimonials-authors li").hover(function() {
            var b = $(this),
                c = "active-testimonial",
                d = b.index(),
                e = b.siblings("." + c).index();
            b.hasClass(c) || (b.siblings("li").removeClass(c).end().addClass(c), a.eq(e).stop(!0, !0).animate({
                opacity: 0
            }, 100, function() {
                $(this).hide(), a.eq(d).css({
                    display: "block",
                    opacity: 0
                }).animate({
                    opacity: 1
                }, 100);
            }));
        });
    });

jQuery(document).ready(function(a) {
    a("#owl-demo").owlCarousel({
        autoPlay: 3e3,
        navigation: false,
        autoHeight: true,
        items: 2,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [768, 2],
        itemsTabletSmall: [568, 1],
        itemsMobile: [479, 1]
    });
});

var mql = window.matchMedia("screen and (min-width: 60em)");
});
