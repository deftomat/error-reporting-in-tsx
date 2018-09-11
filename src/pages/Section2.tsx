import WithIdentity1 from '@app/src/cmp/WithIdentity1';
import WithIdentity10 from '@app/src/cmp/WithIdentity10';
import WithIdentity11 from '@app/src/cmp/WithIdentity11';
import WithIdentity12 from '@app/src/cmp/WithIdentity12';
import WithIdentity13 from '@app/src/cmp/WithIdentity13';
import WithIdentity14 from '@app/src/cmp/WithIdentity14';
import WithIdentity15 from '@app/src/cmp/WithIdentity15';
import WithIdentity16 from '@app/src/cmp/WithIdentity16';
import WithIdentity17 from '@app/src/cmp/WithIdentity17';
import WithIdentity18 from '@app/src/cmp/WithIdentity18';
import WithIdentity19 from '@app/src/cmp/WithIdentity19';
import WithIdentity2 from '@app/src/cmp/WithIdentity2';
import WithIdentity20 from '@app/src/cmp/WithIdentity20';
import WithIdentity21 from '@app/src/cmp/WithIdentity21';
import WithIdentity22 from '@app/src/cmp/WithIdentity22';
import WithIdentity23 from '@app/src/cmp/WithIdentity23';
import WithIdentity24 from '@app/src/cmp/WithIdentity24';
import WithIdentity25 from '@app/src/cmp/WithIdentity25';
import WithIdentity26 from '@app/src/cmp/WithIdentity26';
import WithIdentity27 from '@app/src/cmp/WithIdentity27';
import WithIdentity28 from '@app/src/cmp/WithIdentity28';
import WithIdentity29 from '@app/src/cmp/WithIdentity29';
import WithIdentity3 from '@app/src/cmp/WithIdentity3';
import WithIdentity30 from '@app/src/cmp/WithIdentity30';
import WithIdentity4 from '@app/src/cmp/WithIdentity4';
import WithIdentity5 from '@app/src/cmp/WithIdentity5';
import WithIdentity6 from '@app/src/cmp/WithIdentity6';
import WithIdentity7 from '@app/src/cmp/WithIdentity7';
import WithIdentity8 from '@app/src/cmp/WithIdentity8';
import WithIdentity9 from '@app/src/cmp/WithIdentity9';
import React from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router';

function Section() {
  return (
    <Switch>
      <Redirect from="/" to="/1" exact />
      <Route path="/1" exact component={WithIdentity1} />
      <Route path="/2" exact component={WithIdentity2} />
      <Route path="/3" exact component={WithIdentity3} />
      <Route path="/4" exact component={WithIdentity4} />
      <Route path="/5" exact component={WithIdentity5} />
      <Route path="/6" exact component={WithIdentity6} />
      <Route path="/7" exact component={WithIdentity7} />
      <Route path="/8" exact component={WithIdentity8} />
      <Route path="/9" exact component={WithIdentity9} />
      <Route path="/10" exact component={WithIdentity10} />
      <Route path="/11" exact component={WithIdentity11} />
      <Route path="/12" exact component={WithIdentity12} />
      <Route path="/13" exact component={WithIdentity13} />
      <Route path="/14" exact component={WithIdentity14} />
      <Route path="/15" exact component={WithIdentity15} />
      <Route path="/16" exact component={WithIdentity16} />
      <Route path="/17" exact component={WithIdentity17} />
      <Route path="/18" exact component={WithIdentity18} />
      <Route path="/19" exact component={WithIdentity19} />
      <Route path="/20" exact component={WithIdentity20} />
      <Route path="/21" exact component={WithIdentity21} />
      <Route path="/22" exact component={WithIdentity22} />
      <Route path="/23" exact component={WithIdentity23} />
      <Route path="/24" exact component={WithIdentity24} />
      <Route path="/25" exact component={WithIdentity25} />
      <Route path="/26" exact component={WithIdentity26} />
      <Route path="/27" exact component={WithIdentity27} />
      <Route path="/28" exact component={WithIdentity28} />
      <Route path="/29" exact component={WithIdentity29} />
      <Route path="/30" exact component={WithIdentity30} />
    </Switch>
  );
}

export default withRouter(Section);
