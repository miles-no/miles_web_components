import { propsToAttrs } from '../storybook.utils.js';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const siteHeader = `
background-color: var(--miles_primary_dark);
color: white;
position: sticky;
top: 0;
width: 100dvw;
z-index: 999;
`;

const siteHeaderContainer = `
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 var(--mobile-horizontal-space);
max-width: var(--page-wrap);
margin: auto;
height: 71px;
`;

export default {
  title: 'Miles/Components',
  tags: ['autodocs'],
  render: args => /*html*/ `
	<div>
	    <div style="${siteHeader}">
	        <div style="${siteHeaderContainer}">
	            <div tabindex="0">Miles</div>
	            <miles-site-menu ${propsToAttrs(args)}>
	                <nav class=" main-navigation site-nav">
	                    <ul id="menu-topmenu" class="menu-topmenu">
	                        <li class="menu-item has-mega-menu has-hamburger">
	                            <ul class="mega-menu-block">
	                                <div class="mega-menu-container">
	                                    <ul id="mega-menu-7827" class="mega-menu-grid">
	                                        <li id="nav_menu-9" class="widget widget_nav_menu">
	                                            <h3 class="widget-title">Hvem er vi</h3>
	                                            <div class="menu-hvem-er-vi-container">
	                                                <ul id="menu-hvem-er-vi" class="menu">
	                                                    <li id="menu-item-9733" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9733"><a href="${BASE_URL}vi-er-miles/">Vi er Miles</a></li>
	                                                    <li id="menu-item-9744" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9744"><a href="${BASE_URL}vi-er-miles/om-miles/">Historien vår</a></li>
	                                                    <li id="menu-item-9736" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9736"><a href="${BASE_URL}cv-kompetanse/">Folkene</a></li>
	                                                    <li id="menu-item-9870" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9870"><a href="${BASE_URL}vi-er-miles/samfunnsengasjement/">Samfunnsengasjement</a></li>
	                                                    <li id="menu-item-9754" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9754"><a href="${BASE_URL}team-as-a-service-komponent/">Team as a service</a></li>
	                                                </ul>
	                                            </div>
	                                        </li>
	                                        <li id="nav_menu-10" class="widget widget_nav_menu">
	                                            <h3 class="widget-title">Hva gjør vi</h3>
	                                            <div class="menu-hva-gjor-vi-container">
	                                                <ul id="menu-hva-gjor-vi" class="menu">
	                                                    <li id="menu-item-9757" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9757"><a href="${BASE_URL}fagomrader/">Kompetansen vår</a></li>
	                                                    <li id="menu-item-9738" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9738"><a href="${BASE_URL}pafyll/">Faglige verktøy</a></li>
	                                                </ul>
	                                            </div>
	                                        </li>
	                                        <li id="nav_menu-13" class="widget widget_nav_menu">
	                                            <h3 class="widget-title">Kontakt oss</h3>
	                                            <div class="menu-kontakt-oss-container">
	                                                <ul id="menu-kontakt-oss" class="menu">
	                                                    <li id="menu-item-9758" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-9350 current_page_item menu-item-9758"><a href="${BASE_URL}vare-kontorer/" aria-current="page">Våre kontorer</a></li>
	                                                </ul>
	                                            </div>
	                                        </li>
	                                        <li id="custom_html-23" class="widget_text widget widget_custom_html">
	                                            <div class="textwidget custom-html-widget">
	                                                <h2>
	                                                    <a href="https://innivarmen.miles.no">
	                                                        Jobb i Miles <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
	                                                            <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"></path>
	                                                            <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"></path>
	                                                        </svg>
	                                                    </a>
	                                                </h2>
	                                            </div>
	                                        </li>
	                                        <li id="nav_menu-11" class="widget widget_nav_menu">
	                                            <h3 class="widget-title">Faglig inspirasjon</h3>
	                                            <div class="menu-faglig-inspirasjon-container">
	                                                <ul id="menu-faglig-inspirasjon" class="menu">
	                                                    <li id="menu-item-9796" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9796"><a href="${BASE_URL}fagblogg/">Vår egen blogg</a></li>
	                                                    <li id="menu-item-9740" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9740"><a href="${BASE_URL}milespodden/">MilesPodden</a></li>
	                                                    <li id="menu-item-9739" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9739"><a href="${BASE_URL}se-hva-som-skjer/">Aktivitetskalenderen</a></li>
	                                                </ul>
	                                            </div>
	                                        </li>
	                                        <li id="nav_menu-12" class="widget widget_nav_menu">
	                                            <h3 class="widget-title">Mediesenter</h3>
	                                            <div class="menu-mediesenter-container">
	                                                <ul id="menu-mediesenter" class="menu">
	                                                    <li id="menu-item-9756" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9756"><a href="${BASE_URL}nyhetssaker/">Nyhetssaker</a></li>
	                                                    <li id="menu-item-9755" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9755"><a href="${BASE_URL}logo/">Logo</a></li>
	                                                </ul>
	                                            </div>
	                                        </li>
	                                    </ul>
	                                </div>
	                            </ul>
	                        </li>
	                    </ul>
	                </nav>
	            </miles-site-menu>
	        </div>
	    </div>
	    <p>Lorem ipsum dolor sit am et, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio.</p>
	    <p>Lorem ipsum dolor sit am et, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio.</p>
	    <p>Lorem ipsum dolor sit am et, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio.</p>
	    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
	    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
	    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
	    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
	    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
	    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
	</div>`,
};

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const SiteMenu = {
  args: {},
};
