App = Ember.Application.create();

App.Router.map(function() {
	this.resource('home');
	this.resource('blog', function() {
		this.resource('post', { path: ':post_id' })
	});
});

App.BlogRoute = Ember.Route.extend({
  model: function() {
    return posts;
  }
});

App.PostRoute = Ember.Route.extend({
  model: function(params) {
    return posts.findBy('id', params.post_id);
  }
});

Ember.Handlebars.helper('format-date', function(date) {
	return moment(date).fromNow();
});

var showdown = new Showdown.converter();

Ember.Handlebars.helper('format-markdown', function(input) {
	return new Handlebars.SafeString(showdown.makeHtml(input));
});

var posts = [{
	id: '1',
	title: "bloop",
	author: { name: 'Lon' },
	date: new Date('12-13-13'),
	excerpt: 'First!',
	body: '# Foedera copia ## Et proles manus Surrentino Lorem markdownum vinctumque vias simillimus glaebaque esto poscat, quod pollue, montisque, **forem spectantia** facis? Hoc idem est nec Romana ponere [quae](http://www.uselessaccount.com/), statione luna nemus falsi, vecors non acervos plumis mittere. Fessa medio abductas illos conspexit dolet, est sacra albente, dura, Latini? > Parte *ardet* sustineant Cilix, claro invidiosa sanguine inpellitur  > refugitque. Deus quid quam, quod finge, cum meritis fugiant saliunt et tuos,  > ab, medendi tamen. Mersit refugitque habet Phoebus Scythicae Cereris. **Et agimus se** erat. **Et**  aut monitus per non prospexit, procul fugit matris longique solvit si. Thalamipariter tali vitat [neque](http://omfgdogs.com/) venter. Quo etiam nec usus, intabescere et *est*, et tot excepto? ## Vulnere eminet proles nec Cephenum pleni pro, sunt quam manus, sua currus haut maiora. Eunti ferae threicius [urbem](http://hipstermerkel.tumblr.com/) pereat coegit, Iovisque a feres tamen dictos calathis fortuna omnesque languor sanguine. Nam sed, templi choro; clarum ruit. Decorum tu fontem viscera. > Illo mansit; quis rapuitque si miscent pro per quoque. Negat mea Thebae signa > coetu contigit me laeta sanguine, flexere omnibus terga, sine. Convivia arma > toto ab mea caligine ducentem: hae saxum interea corpora; ne ponunt. Tanto > plus petitis coruscis cum parte urbe *sepulta adflat* quod; suis. ## Euphrates vocant at iamque quas inpavidus primum Terra die albis foedari, sapientius adhuc. Sensitque ut quaeras virum, pavefactaque tum gemino gesserit populos? Par ergo laniata, sequor, quoque petentem haerentem acumine rediit lustravit. - Poscuntque Bellona carmine cornua si flexit deficiunt - Iusta finitimosque color pariterque cecidit quaesitique pari - Dextra accipe est labore umbris nil cursus - Inroravit in ratione certum - Ergo quamquam - Fallebat enim et sicut iunctim colonus sub Circumstantes te quisquis summis generosi et, ego nisi essem tecum: non per Lernae, atque Ionium nescitve. Poterentur putat naturaque nominat potest exspiravit, suspicere efflant arma ingens silvis. Iuvet litora fumo care, potestas cui *precantia*, vulgi soporem *iacta*. Cecrope ingenium virginibus ut tamen rebus elige Diomedis. Vero iam fratrique potiturque contigerant habebimus preces *lumina* dederat adversas! Arbor et cervi, non meae nec nec nefandos tenet valvis; media index.'
}, {
	id: '2',
	title: 'blap',
	author: { name: 'Lon' },
	date: new Date('2-13-13'),
	excerpt: 'Hai',
	body: '# Viscera illi ## Ebur quod agros Troiae inquit firmat ignara Lorem markdownum iurgia cultumque corpora, est est; nec gregesque dumque; quo limen. Vocari auxiliaris **flumina parentur** et aequora? 1. Cura sidera fare cum omnia famularia ora 2. Vidit ignes ossibus soporem 3. A Tyrios auctor ## Mea magna Tu senem sapies aut Phoebi, postquam quod. Per dum potiere, [cum qui](http://news.ycombinator.com/), redit nec inquit *quod habuit* famulae periclo: valuisse, virgo! [Avus](http://imgur.com/) volucris potero populos illic ducimus tua amnis esto ire, vix loton. Per arsuro decus **gens**, conlapsus moenibus cum; oculos? Mea matre vos ablato mutentur obstipuit cum fumis *acto* dicere est corpore tenui in praecipitique. - Amores similisque in defuit lacerum forte arva - Illic Arctos in precor amorem - Duro emissi est Corintho sumpsisse animam - Pede animo - Non que populoque at nymphae iamque concidere - In adhuc formosus ## Haurite bracchia permansit nimbis coetusque quoque quondam Erat plura, dum modo, artus ut se mea tunc saepius manant protinus tetigere aegra in mecum mota. Illis restabat sentiri generis, coniunx! Equi dumque, convicia pater: Myrrha multo laquei expalluit ut ingenua. Dicione expresso multa. - Cum figit formosis thalamos - Caelesti nymphe init - Matura deieci et magni prima tollit vultusque ## Cum ereptaque labor Phaethontis vimque frugis Convivia facinusque sidera; sata puerum? Viros fata virgineumque plangere coniuge ignibus factis nido peregit moenia. Mea urbs, *dum crines eduxit*, aut manus, Abantiades quem, sex periclo cor flamma poenas arcton umerus. Nisi montani plenumque talia exsangue, verbis heros testatum fecit, invitum; mora eris solido morte temone Achilles. Et in ferrum silvas iuvenci exilio iuvenis daedalus ira ignaroque verba! Barbarica hic bellum oscula gementis propinquos tibi. Poena nomine adit pressus primordia tectis esses, voluit regnis timebant auspiciis nunc pares. Dubitatis portenditur urbis paternos cutis sensimus gravi palato, ante.'
}];