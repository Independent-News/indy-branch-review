var N=Object.defineProperty;var m=(o,e)=>N(o,"name",{value:e,configurable:!0});import{j as n}from"./jsx-runtime-1a1b98e7.js";import{M as u}from"./MockContent-9b8394c1.js";import{G as d,R as t,C as c,O as b}from"./Grid.styles-4523bc98.js";import{d as f}from"./styled-components.browser.esm-852d80e5.js";import{D as V}from"./Grid.constants-81b9ad1f.js";import"./index-29d3bc65.js";import"./_commonjsHelpers-f86d8be3.js";import"./InlineContainer.hoc-694d618c.js";import"./AnchorsNav.constants-3fd2a829.js";import"./breakPoints-89c7d41a.js";import"./devices-1d39230d.js";const z=f.table.withConfig({componentId:"sc-xko20d-0"})(["border-collapse:collapse;font:normal 12px/16px ",";table-layout:fixed;text-align:center;th,td{padding:0 0.5em;font:inherit;}"],({theme:o})=>o.fontFamily.secondaryFont),H=f.thead.withConfig({componentId:"sc-xko20d-1"})(["th:first-child{visibility:hidden;}"]),J=f.tbody.withConfig({componentId:"sc-xko20d-2"})(["th:first-child{text-align:left;}"]),K=m(o=>{const{span:e,offset:s}=o;return n.jsx("div",{children:n.jsxs(z,{children:[n.jsxs("colgroup",{children:[n.jsx("col",{width:"auto"}),e&&n.jsx("col",{width:"10%"}),s&&n.jsx("col",{width:"10%"})]}),n.jsx(H,{children:n.jsxs("tr",{children:[n.jsx("th",{children:"device"}),e&&n.jsx("th",{children:"↔︎"}),s&&n.jsx("th",{children:"↤"})]})}),n.jsx(J,{children:V.map((r,h)=>n.jsxs("tr",{children:[n.jsx("th",{children:r}),e&&n.jsx("td",{children:(e==null?void 0:e[r])??"-"}),s&&n.jsx("td",{children:(s==null?void 0:s[r])??"-"})]},h))})]})})},"deviceRenderLabel"),x=m((o,e=K)=>m(function(r){const{span:h,offset:B,children:M}=r,D=(!!h||!!B)&&e(r);return n.jsx(o,{...r,children:n.jsx(u,{label:M||"",children:D})})},"Column"),"withContent");try{withContenthoc.displayName="withContenthoc",withContenthoc.__docgenInfo={description:`A higher order component that extracts the grid props and renders a table as
the content to a MockContent block. This is purely for storybook purposes.`,displayName:"withContenthoc",props:{}}}catch{}const rn={title:"Layout/Grid",component:d,parameters:{layout:"fullscreen",controls:{exclude:["children","theme","as","forwardedAs"]}}},l={render:o=>{const e=x(c);return n.jsxs(d,{children:[n.jsxs(t,{children:[n.jsx(e,{children:"1"}),n.jsx(e,{children:"2"}),n.jsx(e,{children:"3"})]}),n.jsx("br",{}),n.jsxs(t,{children:[n.jsx(e,{children:"1"}),n.jsx(e,{children:"2"})]}),n.jsx("br",{}),n.jsxs(t,{children:[n.jsx(e,{children:"1"}),n.jsx(e,{children:"2"}),n.jsx(e,{children:"3"}),n.jsx(e,{children:"4"}),n.jsx(e,{children:"5"})]}),n.jsx("br",{}),n.jsxs(t,{children:[n.jsx(e,{children:"1"}),n.jsx(e,{children:"2"}),n.jsx(e,{children:"3"}),n.jsx(e,{children:"4"}),n.jsx(e,{children:"5"}),n.jsx(e,{children:"6"}),n.jsx(e,{children:"7"}),n.jsx(e,{children:"8"}),n.jsx(e,{children:"9"}),n.jsx(e,{children:"10"}),n.jsx(e,{children:"11"}),n.jsx(e,{children:"12"})]})]})}},i={render:o=>{const e=x(c);return n.jsxs(d,{children:[n.jsxs(t,{children:[n.jsx(e,{span:{mobile:2}}),n.jsx(e,{span:{mobile:2}})]}),n.jsx("br",{}),n.jsxs(t,{children:[n.jsx(e,{span:{tablet:2,laptop:3}}),n.jsx(e,{span:{tablet:2,laptop:3}}),n.jsx(e,{span:{tablet:2,laptop:3}}),n.jsx(e,{span:{tablet:2,laptop:3}})]}),n.jsx("br",{}),n.jsxs(t,{children:[n.jsx(e,{span:{laptop:4}}),n.jsx(e,{span:{laptop:4}}),n.jsx(e,{span:{laptop:4}})]}),n.jsx("br",{}),n.jsxs(t,{children:[n.jsx(e,{span:{mobile:1,tablet:2,laptop:3}}),n.jsx(e,{span:{mobile:2,tablet:4,laptop:6}}),n.jsx(e,{span:{mobile:1,tablet:2,laptop:3}})]})]})}},a={render:o=>{const e=x(c);return n.jsxs(d,{children:[n.jsxs(t,{children:[n.jsx(e,{span:{mobile:2,tablet:2,laptop:2}}),n.jsx(e,{span:{mobile:2,tablet:2,laptop:4},offset:{tablet:1,laptop:2}}),n.jsx(e,{span:{mobile:2,tablet:2,laptop:2},offset:{tablet:1,laptop:2}})]}),n.jsx("br",{}),n.jsxs(t,{children:[n.jsx(e,{span:{mobile:2,tablet:2,laptop:2,desktop:4}}),n.jsx(e,{span:{mobile:2,tablet:2,laptop:2,desktop:4},offset:{tablet:4,laptop:8,desktop:4}})]})]})}},p={render:o=>n.jsx(d,{children:n.jsx(t,{children:n.jsx(c,{span:{mobile:4,tablet:6,laptop:10},offset:{tablet:1},children:n.jsxs("div",{children:[n.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure beatae impedit tempore temporibus dolorum alias quod dolore porro? Tenetur illo perferendis saepe neque nostrum iste eos animi repellendus porro!"}),n.jsx(b,{children:n.jsx(u,{label:"Full Bleed"})}),n.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure beatae impedit tempore temporibus dolorum alias quod dolore porro? Tenetur illo perferendis saepe neque nostrum iste eos animi repellendus porro!"}),n.jsx(b,{align:"left",span:{tablet:3,laptop:4},children:n.jsx(u,{label:"Inset Left"})}),n.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure beatae impedit tempore temporibus dolorum alias quod dolore porro? Tenetur illo perferendis saepe neque nostrum iste eos animi repellendus porro!"}),n.jsx(b,{align:"right",span:{tablet:3,laptop:4},children:n.jsx(u,{label:"Inset Right"})}),n.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure beatae impedit tempore temporibus dolorum alias quod dolore porro? Tenetur illo perferendis saepe neque nostrum iste eos animi repellendus porro!"})]})})})})};var C,j,w,g,G;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  /**
   * @explain the \`render()\` must be given an argument otherwise the entire
   * story block will be output in the "Show code" block
   */
  render: _props => {
    const Column = withContent(GridColumn);
    return <Grid>
        <Row>
          <Column>1</Column>
          <Column>2</Column>
          <Column>3</Column>
        </Row>
        <br />
        <Row>
          <Column>1</Column>
          <Column>2</Column>
        </Row>
        <br />
        <Row>
          <Column>1</Column>
          <Column>2</Column>
          <Column>3</Column>
          <Column>4</Column>
          <Column>5</Column>
        </Row>
        <br />
        <Row>
          <Column>1</Column>
          <Column>2</Column>
          <Column>3</Column>
          <Column>4</Column>
          <Column>5</Column>
          <Column>6</Column>
          <Column>7</Column>
          <Column>8</Column>
          <Column>9</Column>
          <Column>10</Column>
          <Column>11</Column>
          <Column>12</Column>
        </Row>
      </Grid>;
  }
}`,...(w=(j=l.parameters)==null?void 0:j.docs)==null?void 0:w.source},description:{story:`The simplest grid you can make just consists of a single row with a few
columns.

The grid width will be shared out evenly between the columns.

When there are more columns that the maximum number of columns for a device
then the columns will wrap onto the next line.

A <Grid /> can contain one or more <Row />, which in turn can contain
one or more <Column />.`,...(G=(g=l.parameters)==null?void 0:g.docs)==null?void 0:G.description}}};var y,R,T,_,k;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: _props => {
    const Column = withContent(GridColumn);
    return <Grid>
        <Row>
          <Column span={{
          mobile: 2
        }} />
          <Column span={{
          mobile: 2
        }} />
        </Row>
        <br />
        <Row>
          <Column span={{
          tablet: 2,
          laptop: 3
        }} />
          <Column span={{
          tablet: 2,
          laptop: 3
        }} />
          <Column span={{
          tablet: 2,
          laptop: 3
        }} />
          <Column span={{
          tablet: 2,
          laptop: 3
        }} />
        </Row>
        <br />
        <Row>
          <Column span={{
          laptop: 4
        }} />
          <Column span={{
          laptop: 4
        }} />
          <Column span={{
          laptop: 4
        }} />
        </Row>
        <br />
        <Row>
          <Column span={{
          mobile: 1,
          tablet: 2,
          laptop: 3
        }} />
          <Column span={{
          mobile: 2,
          tablet: 4,
          laptop: 6
        }} />
          <Column span={{
          mobile: 1,
          tablet: 2,
          laptop: 3
        }} />
        </Row>
      </Grid>;
  }
}`,...(T=(R=i.parameters)==null?void 0:R.docs)==null?void 0:T.source},description:{story:`It is possible to specify the number of columns a column should span for each
device. This is done by passing a config object via the \`span\` prop.

It is important to note that the number of columns changes for each device
and so it is likely that the \`span\` value will need to be reset for each
device.`,...(k=(_=i.parameters)==null?void 0:_.docs)==null?void 0:k.description}}};var q,O,S,v,L;a.parameters={...a.parameters,docs:{...(q=a.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: _props => {
    const Column = withContent(GridColumn);
    return <Grid>
        <Row>
          <Column span={{
          mobile: 2,
          tablet: 2,
          laptop: 2
        }} />
          <Column span={{
          mobile: 2,
          tablet: 2,
          laptop: 4
        }} offset={{
          tablet: 1,
          laptop: 2
        }} />
          <Column span={{
          mobile: 2,
          tablet: 2,
          laptop: 2
        }} offset={{
          tablet: 1,
          laptop: 2
        }} />
        </Row>
        <br />
        <Row>
          <Column span={{
          mobile: 2,
          tablet: 2,
          laptop: 2,
          desktop: 4
        }} />
          <Column span={{
          mobile: 2,
          tablet: 2,
          laptop: 2,
          desktop: 4
        }} offset={{
          tablet: 4,
          laptop: 8,
          desktop: 4
        }} />
        </Row>
      </Grid>;
  }
}`,...(S=(O=a.parameters)==null?void 0:O.docs)==null?void 0:S.source},description:{story:"Columns can be offset within the `<Grid />`. This is done by passing a config\nobject via the `offset` prop.\n\nBear in mind that it is possible to offset a column by more than the maximum\nnumber of columns for the `<Grid />`, therefore pushing it onto a new row.",...(L=(v=a.parameters)==null?void 0:v.docs)==null?void 0:L.description}}};var I,W,E,F,A;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: _props => <Grid>
      <Row>
        <Column span={{
        mobile: 4,
        tablet: 6,
        laptop: 10
      }} offset={{
        tablet: 1
      }}>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure
              beatae impedit tempore temporibus dolorum alias quod dolore porro?
              Tenetur illo perferendis saepe neque nostrum iste eos animi
              repellendus porro!
            </p>
            <OffGrid>
              <Content label="Full Bleed" />
            </OffGrid>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure
              beatae impedit tempore temporibus dolorum alias quod dolore porro?
              Tenetur illo perferendis saepe neque nostrum iste eos animi
              repellendus porro!
            </p>
            <OffGrid align="left" span={{
            tablet: 3,
            laptop: 4
          }}>
              <Content label="Inset Left" />
            </OffGrid>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure
              beatae impedit tempore temporibus dolorum alias quod dolore porro?
              Tenetur illo perferendis saepe neque nostrum iste eos animi
              repellendus porro!
            </p>
            <OffGrid align="right" span={{
            tablet: 3,
            laptop: 4
          }}>
              <Content label="Inset Right" />
            </OffGrid>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure
              beatae impedit tempore temporibus dolorum alias quod dolore porro?
              Tenetur illo perferendis saepe neque nostrum iste eos animi
              repellendus porro!
            </p>
          </div>
        </Column>
      </Row>
    </Grid>
}`,...(E=(W=p.parameters)==null?void 0:W.docs)==null?void 0:E.source},description:{story:"The `<OffGrid />` containers can provide some basic means of interacting with\nthe grid system for inline content.\n\nWhen placed within a `<Column />` amongst long-form content the `<OffGrid />`\nwill span edge to edge of the `<Grid />`, regardless of any offset placed on\nthe parent `<Column />`.\n\nThe `<OffGrid />` can also be used to inset content from the left or right by\npassing an `align` prop.\n\nThe assumption is that the offset will be equal on both sides of the grid\ne.g. if the grid is 12 columns wide and the offset of the column is 1 then\nthe span of the column will be 10.",...(A=(F=p.parameters)==null?void 0:F.docs)==null?void 0:A.description}}};const ln=["Columns","ColumnsWithSpan","ColumnsWithOffset","OffGridColumns"];export{l as Columns,a as ColumnsWithOffset,i as ColumnsWithSpan,p as OffGridColumns,ln as __namedExportsOrder,rn as default};
