
/* ----------------------------------- */
/* Default Behaviour of removeData() */
/* ----------------------------------- */

QUnit.module('Default Behaviour of removeData()');

QUnit.test('jQuery.data & removeData, default behaviour', function(assert) {
	assert.expect(2);
	var elem = jQuery('<div/>').appendTo('#qunit-fixture');

	// add data attribute and check it exists
	elem.data('foo', 'bar');
	assert.equal(
		elem.data('foo'), 'bar',
		'elem.data(key) returns value'
	);
	// check it is removable
	assert.equal(
		elem.removeData('foo').data('foo'), undefined,
		'elem.removeData(key).data(key) returns undefined'
	);
});

QUnit.test('jQuery.attr & removeData, default behaviour', function(assert) {
	assert.expect(3);
	var elem = jQuery('<div/>').appendTo('#qunit-fixture');

	// add data attribute via attr and check it exists
	assert.strictEqual(
		elem.attr('data-foo', 'bar').attr('data-foo'), 'bar',
		'.attr getter/setter'
	);
	// removing using removeData leaves the attribute
	elem.removeData('foo');
	assert.equal(
		elem.data('foo'), 'bar',
		'elem.data(key) returns value'
	);
	assert.equal(
		elem.attr('data-foo'), 'bar',
		'elem.attr(key) returns value'
	);
});

QUnit.test('jQuery.data & removeData, default behaviour (array of values)', function(assert) {
	assert.expect(4);
	var elem = jQuery('<div/>').appendTo('#qunit-fixture');

	// add data attribute and check it exists
	elem.data({'bar':'baz', 'boom':'bloz'});
	assert.equal(
		elem.data('bar'), 'baz',
		'elem.data(key) returns value'
	);
	assert.equal(
		elem.data('boom'), 'bloz',
		'elem.data(key) returns value'
	);
	// check it is removable
	elem.removeData(['bar','boom']);
	assert.equal(
		elem.data('bar'), undefined,
		'elem.data(key) returns undefined'
	);
	assert.equal(
		elem.data('boom'), undefined,
		'elem.data(key) returns undefined'
	);
});

QUnit.test('jQuery.attr & removeData, default behaviour (array of values)', function(assert) {
	assert.expect(6);
	var elem = jQuery('<div/>').appendTo('#qunit-fixture');

	// add data attribute via attr and check it exists
	assert.strictEqual(
		elem.attr('data-bar', 'baz').attr('data-bar'), 'baz',
		'.attr getter/setter'
	);
	// add data attribute via attr and check it exists
	assert.strictEqual(
		elem.attr('data-boom', 'bloz').attr('data-boom'), 'bloz',
		'.attr getter/setter'
	);
	// attributes set by attr cannot be removed by removeData
	elem.removeData(['bar','boom']);
	assert.equal(
		elem.data('bar'), 'baz',
		'elem.data(key) returns value'
	);
	assert.equal(
		elem.data('boom'), 'bloz',
		'elem.data(key) returns value'
	);
	assert.equal(
		elem.attr('data-bar'), 'baz',
		'elem.attr(key) returns value'
	);
	assert.equal(
		elem.attr('data-boom'), 'bloz',
		'elem.attr(key) returns value'
	);
});

QUnit.test('jQuery.data & removeData, default behaviour (space-separated string of values)', function(assert) {
	assert.expect(4);
	var elem = jQuery('<div/>').appendTo('#qunit-fixture');

	// add data attribute and check it exists
	elem.data({'bar':'baz', 'boom':'bloz'});
	assert.equal(
		elem.data('bar'), 'baz',
		'elem.data(key) returns value'
	);
	assert.equal(
		elem.data('boom'), 'bloz',
		'elem.data(key) returns value'
	);
	// check it is removable via space-separated string
	elem.removeData('bar boom');
	assert.equal(
		elem.data('bar'), undefined,
		'elem.data(key) returns undefined'
	);
	assert.equal(
		elem.data('boom'), undefined,
		'elem.data(key) returns undefined'
	);
});

QUnit.test('jQuery.attr & removeData, default behaviour (space-separated string of values)', function(assert) {
	assert.expect(6);
	var elem = jQuery('<div/>').appendTo('#qunit-fixture');

	// add data attribute and check it exists
	assert.strictEqual(
		elem.attr('data-bar', 'baz').attr('data-bar'), 'baz',
		'.attr getter/setter'
	);
	// add data attribute via attr and check it exists
	assert.strictEqual(
		elem.attr('data-boom', 'bloz').attr('data-boom'), 'bloz',
		'.attr getter/setter'
	);
	// attributes set by attr cannot be removed by removeData
	elem.removeData('bar boom');
	assert.equal(
		elem.data('bar'), 'baz',
		'elem.data(key) returns value'
	);
	assert.equal(
		elem.data('boom'), 'bloz',
		'elem.data(key) returns value'
	);
	assert.equal(
		elem.attr('data-bar'), 'baz',
		'elem.attr(key) returns value'
	);
	assert.equal(
		elem.attr('data-boom'), 'bloz',
		'elem.attr(key) returns value'
	);
});

QUnit.test('jQuery.data & removeData, default behaviour (empty)', function(assert) {
	assert.expect(4);
	var elem = jQuery('<div/>').appendTo('#qunit-fixture');

	// add data attribute and check it exists
	elem.data({'bar':'baz', 'boom':'bloz'});
	assert.equal(
		elem.data('bar'), 'baz',
		'elem.data(key) returns value'
	);
	assert.equal(
		elem.data('boom'), 'bloz',
		'elem.data(key) returns value'
	);
	// check it is removable
	elem.removeData();
	assert.equal(
		elem.data('bar'), undefined,
		'elem.data(key) returns undefined'
	);
	assert.equal(
		elem.data('boom'), undefined,
		'elem.data(key) returns undefined'
	);
});

QUnit.test('jQuery.data & removeData, default behaviour (undefined)', function(assert) {
	assert.expect(4);
	var elem = jQuery('<div/>').appendTo('#qunit-fixture');

	// add data attribute and check it exists
	elem.data({'bar':'baz', 'boom':'bloz'});
	assert.equal(
		elem.data('bar'), 'baz',
		'elem.data(key) returns value'
	);
	assert.equal(
		elem.data('boom'), 'bloz',
		'elem.data(key) returns value'
	);
	// check it is removable
	elem.removeData(undefined);
	assert.equal(
		elem.data('bar'), undefined,
		'elem.data(key) returns undefined'
	);
	assert.equal(
		elem.data('boom'), undefined,
		'elem.data(key) returns undefined'
	);
});

QUnit.test('jQuery.data & removeData, default behaviour (null)', function(assert) {
	assert.expect(4);
	var elem = jQuery('<div/>').appendTo('#qunit-fixture');

	// add data attribute and check it exists
	elem.data({'bar':'baz', 'boom':'bloz'});
	assert.equal(
		elem.data('bar'), 'baz',
		'elem.data(key) returns value'
	);
	assert.equal(
		elem.data('boom'), 'bloz',
		'elem.data(key) returns value'
	);
	// check it is removable
	elem.removeData(null);
	assert.equal(
		elem.data('bar'), undefined,
		'elem.data(key) returns undefined'
	);
	assert.equal(
		elem.data('boom'), undefined,
		'elem.data(key) returns undefined'
	);
});

/* ----------------------------------- */
/* Extended Behaviour of removeData() */
/* ----------------------------------- */

QUnit.module('Extended Behaviour of removeData() when adding using jQuery.data()');

QUnit.test('jQuery.data & removeData, extended behaviour (allow referencing with data-)', function(assert) {
	assert.expect(2);
	var elem = jQuery('<div/>').appendTo('#qunit-fixture');

	// add data attribute and check it exists
	elem.data('foo', 'bar');
	assert.equal(
		elem.data('foo'), 'bar',
		'elem.data(key) returns value'
	);
	// check it is removable as before
	assert.equal(
		elem.removeData('data-foo').data('foo'), undefined,
		'elem.removeData(key).data(key) returns undefined'
	);
});

QUnit.test('jQuery.data & removeData, default behaviour (allow referencing with data-) (array of values)', function(assert) {
	assert.expect(4);
	var elem = jQuery('<div/>').appendTo('#qunit-fixture');

	// add data attribute and check it exists
	elem.data({'bar':'baz', 'boom':'bloz'});
	assert.equal(
		elem.data('bar'), 'baz',
		'elem.data(key) returns value'
	);
	assert.equal(
		elem.data('boom'), 'bloz',
		'elem.data(key) returns value'
	);
	// check it is removable via array
	elem.removeData(['data-bar','data-boom']);
	assert.equal(
		elem.data('bar'), undefined,
		'elem.data(key) returns undefined'
	);
	assert.equal(
		elem.data('boom'), undefined,
		'elem.data(key) returns undefined'
	);
});

QUnit.test('jQuery.data & removeData, default behaviour (allow referencing with data-) (space-separated string of values)', function(assert) {
	assert.expect(4);
	var elem = jQuery('<div/>').appendTo('#qunit-fixture');

	// add data attribute and check it exists
	elem.data({'bar':'baz', 'boom':'bloz'});
	assert.equal(
		elem.data('bar'), 'baz',
		'elem.data(key) returns value'
	);
	assert.equal(
		elem.data('boom'), 'bloz',
		'elem.data(key) returns value'
	);
	// check it is removable via space-separated string as before
	elem.removeData('data-bar data-boom');
	assert.equal(
		elem.data('bar'), undefined,
		'elem.data(key) returns undefined'
	);
	assert.equal(
		elem.data('boom'), undefined,
		'elem.data(key) returns undefined'
	);
});

QUnit.module('Extended Behaviour of removeData() when adding using jQuery.attr()');

QUnit.test('jQuery.attr & removeData, extended behaviour (removes attribute)', function(assert) {
	assert.expect(2);
	var elem = jQuery('<div/>').appendTo('#qunit-fixture');

	// add data attribute via attr and check it exists
	assert.strictEqual(
		elem.attr('data-foo', 'bar').attr('data-foo'), 'bar',
		'.attr getter/setter'
	);
	// removing using extended removeData method also removes the attribute
	assert.equal(
		elem.removeData('foo', {removeAttr:true}).attr('data-foo'), undefined,
		'elem.removeData(key, true).attr(key) returns undefined'
	);
});

QUnit.test('jQuery.attr & removeData, extended behaviour (removes attribute) (array of values)', function(assert) {
	assert.expect(6);
	var elem = jQuery('<div/>').appendTo('#qunit-fixture');

	// add data attribute via attr and check it exists
	assert.strictEqual(
		elem.attr('data-bar', 'baz').attr('data-bar'), 'baz',
		'.attr getter/setter'
	);
	// add data attribute via attr and check it exists
	assert.strictEqual(
		elem.attr('data-boom', 'bloz').attr('data-boom'), 'bloz',
		'.attr getter/setter'
	);
	// check it is removable via array as before
	elem.removeData(['bar','boom'], {removeAttr:true});
	assert.equal(
		elem.data('bar'), undefined,
		'elem.data(key) returns undefined'
	);
	assert.equal(
		elem.data('boom'), undefined,
		'elem.data(key) returns undefined'
	);
	assert.equal(
		elem.attr('data-bar'), undefined,
		'elem.attr(key) returns undefined'
	);
	assert.equal(
		elem.attr('data-boom'), undefined,
		'elem.attr(key) returns undefined'
	);
});

QUnit.test('jQuery.attr & removeData, extended behaviour (removes attribute) (space-separated string of values)', function(assert) {
	assert.expect(6);
	var elem = jQuery('<div/>').appendTo('#qunit-fixture');

	// add data attribute and check it exists
	assert.strictEqual(
		elem.attr('data-bar', 'baz').attr('data-bar'), 'baz',
		'.attr getter/setter'
	);
	// add data attribute via attr and check it exists
	assert.strictEqual(
		elem.attr('data-boom', 'bloz').attr('data-boom'), 'bloz',
		'.attr getter/setter'
	);
	// check it is removable via space-separated string as before
	elem.removeData('bar boom', {removeAttr:true});
	assert.equal(
		elem.data('bar'), undefined,
		'elem.data(key) returns undefined'
	);
	assert.equal(
		elem.data('boom'), undefined,
		'elem.data(key) returns undefined'
	);
	assert.equal(
		elem.attr('data-bar'), undefined,
		'elem.attr(key) returns undefined'
	);
	assert.equal(
		elem.attr('data-boom'), undefined,
		'elem.attr(key) returns undefined'
	);
});

QUnit.test('jQuery.attr & removeData, extended behaviour (removes attribute) (allow referencing with data-)', function(assert) {
	assert.expect(3);
	var elem = jQuery('<div/>').appendTo('#qunit-fixture');

	// add data attribute via attr and check it exists
	assert.strictEqual(
		elem.attr('data-foo', 'bar').attr('data-foo'), 'bar',
		'.attr getter/setter'
	);
	// removing using removeData leaves the attribute
	assert.equal(
		elem.removeData('data-foo').attr('data-foo'), 'bar',
		'elem.removeData(key).attr(key) returns value'
	);
	// removing using extended removeData method also removes the attribute
	assert.equal(
		elem.removeData('data-foo', {removeAttr:true}).attr('data-foo'), undefined,
		'elem.removeData(key, true).attr(key) returns undefined'
	);
});

QUnit.test('jQuery.attr & removeData, extended behaviour (removes attribute) (allow referencing with data-) (array of values)', function(assert) {
	assert.expect(6);
	var elem = jQuery('<div/>').appendTo('#qunit-fixture');

	// add data attribute via attr and check it exists
	assert.strictEqual(
		elem.attr('data-bar', 'baz').attr('data-bar'), 'baz',
		'.attr getter/setter'
	);
	// add data attribute via attr and check it exists
	assert.strictEqual(
		elem.attr('data-boom', 'bloz').attr('data-boom'), 'bloz',
		'.attr getter/setter'
	);
	// check it is removable via array
	elem.removeData(['data-bar','data-boom'], {removeAttr:true});
	assert.equal(
		elem.data('bar'), undefined,
		'elem.data(key) returns undefined'
	);
	assert.equal(
		elem.data('boom'), undefined,
		'elem.data(key) returns undefined'
	);
	assert.equal(
		elem.attr('data-bar'), undefined,
		'elem.attr(key) returns undefined'
	);
	assert.equal(
		elem.attr('data-boom'), undefined,
		'elem.attr(key) returns undefined'
	);
});

QUnit.test('jQuery.attr & removeData, extended behaviour (removes attribute) (allow referencing with data-) (space-separated string of values)', function(assert) {
	assert.expect(6);
	var elem = jQuery('<div/>').appendTo('#qunit-fixture');

	// add data attribute and check it exists
	assert.strictEqual(
		elem.attr('data-bar', 'baz').attr('data-bar'), 'baz',
		'.attr getter/setter'
	);
	// add data attribute via attr and check it exists
	assert.strictEqual(
		elem.attr('data-boom', 'bloz').attr('data-boom'), 'bloz',
		'.attr getter/setter'
	);
	// check it is removable via space-separated string as before
	elem.removeData('data-bar data-boom', {removeAttr:true});
	assert.equal(
		elem.data('bar'), undefined,
		'elem.data(key) returns undefined'
	);
	assert.equal(
		elem.data('boom'), undefined,
		'elem.data(key) returns undefined'
	);
	assert.equal(
		elem.attr('data-bar'), undefined,
		'elem.attr(key) returns undefined'
	);
	assert.equal(
		elem.attr('data-boom'), undefined,
		'elem.attr(key) returns undefined'
	);
});

QUnit.module('Extended Behaviour of removeData() when matching values using a single key');

QUnit.test('jQuery.data & removeData, extended behaviour', function(assert) {
	assert.expect(4);
	var elem = jQuery('<div/>').appendTo('#qunit-fixture');

	// add data attribute and check it exists
	elem.data({'bar':'baz', 'boom':'bloz'});
	assert.equal(
		elem.data('bar'), 'baz',
		'elem.data(key) returns value'
	);
	assert.equal(
		elem.data('boom'), 'bloz',
		'elem.data(key) returns value'
	);
	// check it is removable as before
	elem.removeData('bar', {values:'baz'});
	assert.equal(
		elem.data('bar'), undefined,
		'elem.data(key) returns undefined'
	);
	assert.equal(
		elem.data('boom'), 'bloz',
		'elem.data(key) returns bloz'
	);
});

QUnit.test('jQuery.data & removeData, extended behaviour', function(assert) {
	assert.expect(4);
	var elem = jQuery('<div/>').appendTo('#qunit-fixture');

	// add data attribute and check it exists
	elem.data({'bar':'baz', 'boom':'bloz'});
	assert.equal(
		elem.data('bar'), 'baz',
		'elem.data(key) returns value'
	);
	assert.equal(
		elem.data('boom'), 'bloz',
		'elem.data(key) returns value'
	);
	// check it is removable as before
	elem.removeData('bar', {values:'wrong'});
	assert.equal(
		elem.data('bar'), 'baz',
		'elem.data(key) returns value'
	);
	assert.equal(
		elem.data('boom'), 'bloz',
		'elem.data(key) returns bloz'
	);
});

QUnit.test('jQuery.data & removeData, extended behaviour', function(assert) {
	assert.expect(4);
	var elem = jQuery('<div/>').appendTo('#qunit-fixture');

	// add data attribute and check it exists
	elem.data({'bar':'baz', 'boom':'bloz'});
	assert.equal(
		elem.data('bar'), 'baz',
		'elem.data(key) returns value'
	);
	assert.equal(
		elem.data('boom'), 'bloz',
		'elem.data(key) returns value'
	);
	// check it is removable as before
	elem.removeData('bar', {values:''});
	assert.equal(
		elem.data('bar'), 'baz',
		'elem.data(key) returns value'
	);
	assert.equal(
		elem.data('boom'), 'bloz',
		'elem.data(key) returns bloz'
	);
});

QUnit.test('jQuery.data & removeData, extended behaviour', function(assert) {
	assert.expect(4);
	var elem = jQuery('<div/>').appendTo('#qunit-fixture');

	// add data attribute and check it exists
	elem.data({'bar':'baz', 'boom':'bloz'});
	assert.equal(
		elem.data('bar'), 'baz',
		'elem.data(key) returns value'
	);
	assert.equal(
		elem.data('boom'), 'bloz',
		'elem.data(key) returns value'
	);
	// check it is removable as before
	elem.removeData('bar', {values:undefined});
	assert.equal(
		elem.data('bar'), undefined,
		'elem.data(key) returns undefined'
	);
	assert.equal(
		elem.data('boom'), 'bloz',
		'elem.data(key) returns bloz'
	);
});

QUnit.test('jQuery.data & removeData, extended behaviour', function(assert) {
	assert.expect(4);
	var elem = jQuery('<div/>').appendTo('#qunit-fixture');

	// add data attribute and check it exists
	elem.data({'bar':'baz', 'boom':'bloz'});
	assert.equal(
		elem.data('bar'), 'baz',
		'elem.data(key) returns value'
	);
	assert.equal(
		elem.data('boom'), 'bloz',
		'elem.data(key) returns value'
	);
	// check it is removable as before
	elem.removeData('bar', {values:null});
	assert.equal(
		elem.data('bar'), undefined,
		'elem.data(key) returns undefined'
	);
	assert.equal(
		elem.data('boom'), 'bloz',
		'elem.data(key) returns bloz'
	);
});

QUnit.test('jQuery.data & removeData, extended behaviour (array of values)', function(assert) {
	assert.expect(4);
	var elem = jQuery('<div/>').appendTo('#qunit-fixture');

	// add data attribute and check it exists
	elem.data({'bar':'baz', 'boom':'bloz'});
	assert.equal(
		elem.data('bar'), 'baz',
		'elem.data(key) returns value'
	);
	assert.equal(
		elem.data('boom'), 'bloz',
		'elem.data(key) returns value'
	);
	// check it is removable as before
	elem.removeData('bar', {values:['baz','bloz']});
	assert.equal(
		elem.data('bar'), undefined,
		'elem.data(key) returns undefined'
	);
	assert.equal(
		elem.data('boom'), 'bloz',
		'elem.data(key) returns bloz'
	);
});

QUnit.test('jQuery.data & removeData, extended behaviour (space-separated string of values)', function(assert) {
	assert.expect(4);
	var elem = jQuery('<div/>').appendTo('#qunit-fixture');

	// add data attribute and check it exists
	elem.data({'bar':'baz', 'boom':'bloz'});
	assert.equal(
		elem.data('bar'), 'baz',
		'elem.data(key) returns value'
	);
	assert.equal(
		elem.data('boom'), 'bloz',
		'elem.data(key) returns value'
	);
	// check it is removable as before
	elem.removeData('bar', {values:'baz bloz'});
	assert.equal(
		elem.data('bar'), undefined,
		'elem.data(key) returns undefined'
	);
	assert.equal(
		elem.data('boom'), 'bloz',
		'elem.data(key) returns bloz'
	);
});

QUnit.module('Extended Behaviour of removeData() when matching values using an array of keys');

QUnit.test('jQuery.data & removeData, extended behaviour (single value)', function(assert) {
	assert.expect(4);
	var elem = jQuery('<div/>').appendTo('#qunit-fixture');

	// add data attribute and check it exists
	elem.data({'bar':'baz', 'boom':'bloz'});
	assert.equal(
		elem.data('bar'), 'baz',
		'elem.data(key) returns value'
	);
	assert.equal(
		elem.data('boom'), 'bloz',
		'elem.data(key) returns value'
	);
	// check it is removable as before
	elem.removeData(['bar','boom'], {values:['baz']});
	assert.equal(
		elem.data('bar'), undefined,
		'elem.data(key) returns undefined'
	);
	assert.equal(
		elem.data('boom'), undefined,
		'elem.data(key) returns undefined'
	);
});

QUnit.test('jQuery.data & removeData, extended behaviour (array of values)', function(assert) {
	assert.expect(4);
	var elem = jQuery('<div/>').appendTo('#qunit-fixture');

	// add data attribute and check it exists
	elem.data({'bar':'baz', 'boom':'bloz'});
	assert.equal(
		elem.data('bar'), 'baz',
		'elem.data(key) returns value'
	);
	assert.equal(
		elem.data('boom'), 'bloz',
		'elem.data(key) returns value'
	);
	// check it is removable as before
	elem.removeData(['bar','boom'], {values:['baz','bloz']});
	assert.equal(
		elem.data('bar'), undefined,
		'elem.data(key) returns undefined'
	);
	assert.equal(
		elem.data('boom'), undefined,
		'elem.data(key) returns undefined'
	);
});

QUnit.test('jQuery.data & removeData, extended behaviour (array of values)', function(assert) {
	assert.expect(4);
	var elem = jQuery('<div/>').appendTo('#qunit-fixture');

	// add data attribute and check it exists
	elem.data({'bar':'baz', 'boom':'bloz'});
	assert.equal(
		elem.data('bar'), 'baz',
		'elem.data(key) returns value'
	);
	assert.equal(
		elem.data('boom'), 'bloz',
		'elem.data(key) returns value'
	);
	// check it is removable as before
	elem.removeData(['bar','boom'], {values:['baz','wrong']});
	assert.equal(
		elem.data('bar'), undefined,
		'elem.data(key) returns undefined'
	);
	assert.equal(
		elem.data('boom'), 'bloz',
		'elem.data(key) returns value'
	);
});

QUnit.test('jQuery.data & removeData, extended behaviour (array of values)', function(assert) {
	assert.expect(4);
	var elem = jQuery('<div/>').appendTo('#qunit-fixture');

	// add data attribute and check it exists
	elem.data({'bar':'baz', 'boom':'bloz'});
	assert.equal(
		elem.data('bar'), 'baz',
		'elem.data(key) returns value'
	);
	assert.equal(
		elem.data('boom'), 'bloz',
		'elem.data(key) returns value'
	);
	// check it is removable as before
	elem.removeData(['bar','boom'], {values:['baz','']});
	assert.equal(
		elem.data('bar'), undefined,
		'elem.data(key) returns undefined'
	);
	assert.equal(
		elem.data('boom'), 'bloz',
		'elem.data(key) returns value'
	);
});

QUnit.test('jQuery.data & removeData, extended behaviour (space-separated string of values)', function(assert) {
	assert.expect(4);
	var elem = jQuery('<div/>').appendTo('#qunit-fixture');

	// add data attribute and check it exists
	elem.data({'bar':'baz', 'boom':'bloz'});
	assert.equal(
		elem.data('bar'), 'baz',
		'elem.data(key) returns value'
	);
	assert.equal(
		elem.data('boom'), 'bloz',
		'elem.data(key) returns value'
	);
	// check it is removable as before
	elem.removeData(['bar','boom'], {values:'baz bloz'});
	assert.equal(
		elem.data('bar'), undefined,
		'elem.data(key) returns undefined'
	);
	assert.equal(
		elem.data('boom'), undefined,
		'elem.data(key) returns undefined'
	);
});

QUnit.test('jQuery.data & removeData, extended behaviour (space-separated string of values)', function(assert) {
	assert.expect(4);
	var elem = jQuery('<div/>').appendTo('#qunit-fixture');

	// add data attribute and check it exists
	elem.data({'bar':'baz', 'boom':'bloz'});
	assert.equal(
		elem.data('bar'), 'baz',
		'elem.data(key) returns value'
	);
	assert.equal(
		elem.data('boom'), 'bloz',
		'elem.data(key) returns value'
	);
	// check it is removable as before
	elem.removeData(['bar','boom'], {values:'baz wrong'});
	assert.equal(
		elem.data('bar'), undefined,
		'elem.data(key) returns undefined'
	);
	assert.equal(
		elem.data('boom'), 'bloz',
		'elem.data(key) returns value'
	);
});

QUnit.test('jQuery.data & removeData, extended behaviour (space-separated string of values)', function(assert) {
	assert.expect(4);
	var elem = jQuery('<div/>').appendTo('#qunit-fixture');

	// add data attribute and check it exists
	elem.data({'bar':'baz', 'boom':'bloz'});
	assert.equal(
		elem.data('bar'), 'baz',
		'elem.data(key) returns value'
	);
	assert.equal(
		elem.data('boom'), 'bloz',
		'elem.data(key) returns value'
	);
	// check it is removable as before
	elem.removeData(['bar','boom'], {values:'baz '});
	assert.equal(
		elem.data('bar'), undefined,
		'elem.data(key) returns undefined'
	);
	assert.equal(
		elem.data('boom'), 'bloz',
		'elem.data(key) returns value'
	);
});

QUnit.module('Extended Behaviour of removeData() when matching values using an space-separated string of values');

QUnit.test('jQuery.data & removeData, extended behaviour (single value)', function(assert) {
	assert.expect(4);
	var elem = jQuery('<div/>').appendTo('#qunit-fixture');

	// add data attribute and check it exists
	elem.data({'bar':'baz', 'boom':'bloz'});
	assert.equal(
		elem.data('bar'), 'baz',
		'elem.data(key) returns value'
	);
	assert.equal(
		elem.data('boom'), 'bloz',
		'elem.data(key) returns value'
	);
	// check it is removable as before
	elem.removeData('bar boom', {values:['baz']});
	assert.equal(
		elem.data('bar'), undefined,
		'elem.data(key) returns undefined'
	);
	assert.equal(
		elem.data('boom'), undefined,
		'elem.data(key) returns undefined'
	);
});

QUnit.test('jQuery.data & removeData, extended behaviour (array of values)', function(assert) {
	assert.expect(4);
	var elem = jQuery('<div/>').appendTo('#qunit-fixture');

	// add data attribute and check it exists
	elem.data({'bar':'baz', 'boom':'bloz'});
	assert.equal(
		elem.data('bar'), 'baz',
		'elem.data(key) returns value'
	);
	assert.equal(
		elem.data('boom'), 'bloz',
		'elem.data(key) returns value'
	);
	// check it is removable as before
	elem.removeData('bar boom', {values:['baz','bloz']});
	assert.equal(
		elem.data('bar'), undefined,
		'elem.data(key) returns undefined'
	);
	assert.equal(
		elem.data('boom'), undefined,
		'elem.data(key) returns undefined'
	);
});

QUnit.test('jQuery.data & removeData, extended behaviour (array of values)', function(assert) {
	assert.expect(4);
	var elem = jQuery('<div/>').appendTo('#qunit-fixture');

	// add data attribute and check it exists
	elem.data({'bar':'baz', 'boom':'bloz'});
	assert.equal(
		elem.data('bar'), 'baz',
		'elem.data(key) returns value'
	);
	assert.equal(
		elem.data('boom'), 'bloz',
		'elem.data(key) returns value'
	);
	// check it is removable as before
	elem.removeData('bar boom', {values:['baz','wrong']});
	assert.equal(
		elem.data('bar'), undefined,
		'elem.data(key) returns undefined'
	);
	assert.equal(
		elem.data('boom'), 'bloz',
		'elem.data(key) returns value'
	);
});

QUnit.test('jQuery.data & removeData, extended behaviour (array of values)', function(assert) {
	assert.expect(4);
	var elem = jQuery('<div/>').appendTo('#qunit-fixture');

	// add data attribute and check it exists
	elem.data({'bar':'baz', 'boom':'bloz'});
	assert.equal(
		elem.data('bar'), 'baz',
		'elem.data(key) returns value'
	);
	assert.equal(
		elem.data('boom'), 'bloz',
		'elem.data(key) returns value'
	);
	// check it is removable as before
	elem.removeData('bar boom', {values:['baz','']});
	assert.equal(
		elem.data('bar'), undefined,
		'elem.data(key) returns undefined'
	);
	assert.equal(
		elem.data('boom'), 'bloz',
		'elem.data(key) returns value'
	);
});

QUnit.test('jQuery.data & removeData, extended behaviour (space-separated string of values)', function(assert) {
	assert.expect(4);
	var elem = jQuery('<div/>').appendTo('#qunit-fixture');

	// add data attribute and check it exists
	elem.data({'bar':'baz', 'boom':'bloz'});
	assert.equal(
		elem.data('bar'), 'baz',
		'elem.data(key) returns value'
	);
	assert.equal(
		elem.data('boom'), 'bloz',
		'elem.data(key) returns value'
	);
	// check it is removable as before
	elem.removeData('bar boom', {values:'baz bloz'});
	assert.equal(
		elem.data('bar'), undefined,
		'elem.data(key) returns undefined'
	);
	assert.equal(
		elem.data('boom'), undefined,
		'elem.data(key) returns undefined'
	);
});

QUnit.test('jQuery.data & removeData, extended behaviour (space-separated string of values)', function(assert) {
	assert.expect(4);
	var elem = jQuery('<div/>').appendTo('#qunit-fixture');

	// add data attribute and check it exists
	elem.data({'bar':'baz', 'boom':'bloz'});
	assert.equal(
		elem.data('bar'), 'baz',
		'elem.data(key) returns value'
	);
	assert.equal(
		elem.data('boom'), 'bloz',
		'elem.data(key) returns value'
	);
	// check it is removable as before
	elem.removeData('bar boom', {values:'baz wrong'});
	assert.equal(
		elem.data('bar'), undefined,
		'elem.data(key) returns undefined'
	);
	assert.equal(
		elem.data('boom'), 'bloz',
		'elem.data(key) returns value'
	);
});

QUnit.test('jQuery.data & removeData, extended behaviour (space-separated string of values)', function(assert) {
	assert.expect(4);
	var elem = jQuery('<div/>').appendTo('#qunit-fixture');

	// add data attribute and check it exists
	elem.data({'bar':'baz', 'boom':'bloz'});
	assert.equal(
		elem.data('bar'), 'baz',
		'elem.data(key) returns value'
	);
	assert.equal(
		elem.data('boom'), 'bloz',
		'elem.data(key) returns value'
	);
	// check it is removable as before
	elem.removeData('bar boom', {values:'baz '});
	assert.equal(
		elem.data('bar'), undefined,
		'elem.data(key) returns undefined'
	);
	assert.equal(
		elem.data('boom'), 'bloz',
		'elem.data(key) returns value'
	);
});

