---
title: Simplifying a complex brain
layout: page
section: research
breadcrumb: Simplifying a complex brain
permalink: /research/brain-dimensionality/
page_class: research-detail
---

A brain recording can contain thousands of signals changing simultaneously. I use machine learning to look for simple patterns to help us understand this complexity. I then build analysis tools and mathematical models to connect these patterns to everything from the activity of individual neurons to behaviour.

The biggest challenge is figuring out which information is important. I found that small, easily overlooked signals carry important information, such as differences between people that might help diagnose brain diseases.  My goal is to find robust patterns of brain activity that are grounded in biology and can eventually be used to diagnose or treat patients.

<figure class="research-figure">
  <div class="research-figure__result">
    <img src="{{ '/assets/img/research/brain-dimensionality-reliable-component.webp' | relative_url }}" alt="Four views of the cortex showing the first reliable component of average brain-scan signals, with positive associations in red and negative associations in blue." width="1263" height="835" loading="lazy" decoding="async">
  </div>
  <figcaption>Shown here is the most reliable pattern of brain activity we found in our study, projected onto a cartoon brain viewed from four different angles.  Red and blue indicate high positive and negative values, white indicates zero, and grey regions were excluded.  This means that people with a higher score on this pattern tend to have higher average brain activity in red regions and lower average activity in blue regions.  The reliable pattern shown here is intense on the outside surface of the brain (top two images) and deep inside the brain (bottom two images), showing that the important contrast is the difference between activity on the inside and outside of the brain.  From <a href="https://doi.org/10.64898/2026.01.25.701594">Borovykh and colleagues (2026), Figure 2b</a>.</figcaption>
</figure>

## Related papers

{% include research-papers.html topic="brain-dimensionality" %}

[Explore the other research topics]({{ '/research/' | relative_url }})
