# Accordion

```html
<div class="content">
	<h2>F.A.Q. Accordion</h2>
	<p>Quickly turn all divs on a page with the class 'faq-accordion' into jQuery UI accordions.</p>
	<ol>
		<li>Include the faq.js file in your header</li>
			<pre class=" language-markup"><code class=" language-markup"><span class="token script language-javascript"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">language</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>javascript<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/include/js/faq.js<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span></code></pre>

		<li>Create your accordion element and its contents</li>
			<pre class=" language-markup"><code class=" language-markup">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>faq-accordion centered<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Accordion One<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Content. Content. Content. Content.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>	
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Accordion Two<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Content. Content. Content. Content. Content. Content. Content. Content. Content. Content. Content. Content. Content. Content.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>	
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code></pre>
		<li>The above example renders as:</li></ol>
	<div class="faq-accordion centered ui-accordion ui-widget ui-helper-reset" role="tablist">
		<h3 href="#" class="ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons" role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabindex="0"><span class="ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"></span>Accordion One</h3>
		<div class="ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" style="display: none;" id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true">
			<p>Content. Content. Content. Content.</p>		
		</div>
		<h3 href="#" class="ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons" role="tab" id="ui-id-3" aria-controls="ui-id-4" aria-selected="false" aria-expanded="false" tabindex="-1"><span class="ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"></span>Accordion Two</h3>
		<div class="ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" style="display: none;" id="ui-id-4" aria-labelledby="ui-id-3" role="tabpanel" aria-hidden="true">
			<p>Content. Content. Content. Content. Content. Content. Content. 
Content. Content. Content. Content. Content. Content. Content. Content. 
Content. </p>	
		</div>		
	</div>
</div>
```

