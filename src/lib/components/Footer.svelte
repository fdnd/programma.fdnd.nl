<script>
	// Aggregate *.fdnd.nl names from github.com/fdnd
</script>

<footer>
	<nav>
		<h2>Microsites</h2>
		<p>
			FDND maakt gebruik van een heleboel microsites in plaats van één grote website met een
			ingewikkelde informatiestructuur. Microsites zijn kleine websites met een specifiek doel ter
			ondersteuning van een campagne, informatie over een product of dienst.
		</p>
		<ul>
			<li><a href="https://fdnd.nl">FDND.nl</a></li>
			<li>
				<a href="https://contact.fdnd.nl">Contact en routebeschrijving</a>
			</li>
			<li><a href="https://programma.fdnd.nl">Programma</a></li>
			<li><a href="https://skc.fdnd.nl">Studie Keuze Check</a></li>
			<li><a href="https://partners.fdnd.nl">Partners</a></li>
			<li><a href="https://tasks.fdnd.nl">Leertaken</a></li>
			<li><a href="https://styleguide.fdnd.nl">Styleguide</a></li>
		</ul>
	</nav>
	<section class="copy-construct">
		<span class="blue-on-purple">Information&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🔍</span>
		<span class="blue-on-green">♥</span>
		<span class="blue-on-white"><span class="white-on-blue">to be</span> free</span>
		<span class="blue-on-green">@</span>
		<span class="purple-on-blue">frontend</span>
		<span class="blue-on-purple">design</span>
		<span class="white-on-blue">&</span>
		<span class="blue-on-green">development</span>
	</section>
</footer>

<style>
	footer {
		font-size: 1rem;
	}
	.copy-construct {
    font-size: 1rem;
    padding-bottom: 2em;

		display: flex;
		flex-flow: row-reverse wrap-reverse;
		justify-content: flex-end;
		align-content: flex-start;
		align-items: flex-start;
		gap: 1em;
	}
	.copy-construct span {
		display: block;
		padding: 0 1em;
		text-align: center;
		line-height: 4;
		height: 4em;
		white-space: nowrap;

		border-style: solid;
		border-width: 1px;
		border-radius: var(--pilled);
	}
	.copy-construct > span:nth-of-type(1) {
		border-radius: var(--rounded);
		order: 8;
	}
	.copy-construct > span:nth-of-type(2) {
		width: 4rem;
		font-size: 2.5em;
    height: 4rem;
		padding-left: 0.7em;
		order: 7;
	}
	.copy-construct > span:nth-of-type(3) {
		display: flex;
		justify-content: space-between;
		width: 12em;
		order: 6;
	}
	.copy-construct > span:nth-of-type(3) span {
		margin-top: 0.25em;
		margin-left: -0.75em;
		line-height: 3.5em;
		height: 3.5em;
	}
	.copy-construct > span:nth-of-type(4) {
		width: 4em;
		border-radius: 0;
		order: 5;
	}
	.copy-construct > span:nth-of-type(5) {
		flex-grow: 3;
		order: 4;
	}
	.copy-construct > span:nth-of-type(6) {
		flex-grow: 3;
		width: 12em;
		order: 3;
	}
	.copy-construct > span:nth-of-type(7) {
		width: 4em;
		order: 2;
	}
	.copy-construct > span:nth-of-type(8) {
		flex-grow: 5;
		order: 1;
	}
</style>
